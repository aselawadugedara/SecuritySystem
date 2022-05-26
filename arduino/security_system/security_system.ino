#include <ESP8266WiFi.h>
#include <WiFiClient.h> 
#include <ESP8266WebServer.h>
#include <ESP8266HTTPClient.h>
#include <Servo.h>

const char *ssid = "Wadda";  //ENTER YOUR WIFI SETTINGS
const char *password = "19700813";
const int buzzer =  4;
int ledPin = 12; // choose pin for the LED
int inputPin = 13; // choose input pin (for Infrared sensor) 
int val = 0; // variable for reading the pin status
Servo servo;

//Web/Server address to read/write from 
const char *host = "192.168.1.112";

void setup() {
 servo.attach(2); //D4
 servo.write(0);
 pinMode(ledPin, OUTPUT); // declare LED as output 
 pinMode(inputPin, INPUT); // declare Infrared sensor as input
 pinMode(buzzer, OUTPUT);
  delay(1000);
  Serial.begin(115200);
  WiFi.mode(WIFI_OFF);        //Prevents reconnection issue (taking too long to connect)
  delay(1000);
  WiFi.mode(WIFI_STA);        //This line hides the viewing of ESP as wifi hotspot
  
  WiFi.begin(ssid, password);     //Connect to your WiFi router
  Serial.println("");

  Serial.print("Connecting");
  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  //If connection successful show IP address in serial monitor
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());  //IP address assigned to your ESP
}

void loop() {
  HTTPClient http;    //Declare object of class HTTPClient
  WiFiClient clientt;
  val = digitalRead(inputPin); // read input value 
   if (val == HIGH)
   { // check if the input is HIGH
      digitalWrite(ledPin, HIGH); // turn LED ON   
      digitalWrite(buzzer, HIGH);
      servo.write(180);
      Serial.println(val);
      
   } 
   else 
   { 
      digitalWrite(ledPin, LOW); // turn LED OFF 
      digitalWrite(buzzer, LOW);
      servo.write(0);
      Serial.println(val);
     
   } 
//  String ADCData, station, postData;
//  int adcvalue= val;  //Read Analog value of LDR
//  ADCData = String(adcvalue);   //String to interger conversion
//  station = "A";
//
//  //Post Data
//  postData = "status=" + ADCData + "&station=" + station ;
//  
//  http.begin(clientt,"http://192.168.1.112/postdemo.php");              //Specify request destination
//  http.addHeader("Content-Type", "application/x-www-form-urlencoded");    //Specify content-type header
//
//  int httpCode = http.POST(postData);   //Send the request
//  String payload = http.getString();    //Get the response payload
//
//  Serial.println(httpCode);   //Print HTTP return code
//  Serial.println(payload);    //Print request response payload
//
//  http.end();  //Close connection
  
}
