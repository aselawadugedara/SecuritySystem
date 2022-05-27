#include "Arduino.h"
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ArduinoJson.h>
#include <ESP8266HTTPClient.h>
#include <Servo.h>

#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
 
const char* ssid = "Wadda";
const char* password = "19700813";
const int buzzer =  14;
int ledPin = 12; // choose pin for the LED
int inputPin = 13; // choose input pin (for Infrared sensor) 
int val = 0; // variable for reading the pin status
Servo servo;

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels
// Declaration for an SSD1306 display connected to I2C (SDA, SCL pins)
#define OLED_RESET     -1 // Reset pin # (or -1 if sharing Arduino reset pin)
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
 
ESP8266WebServer server(80);
void showDoorStatus() {
      HTTPClient http;    //Declare object of class HTTPClient
      WiFiClient clientt;
      
      DynamicJsonDocument doc(512);
 
      doc["doorStatus"] = val;
      doc["gasStatus"] = 0;
      doc["humidityStatus"] = 0;
      doc["lightStatus"] = 0;
 
      Serial.print(F("Stream..."));
      String buf;
      serializeJson(doc, buf);
      http.begin(clientt,"http://192.168.1.112:4000/api/security/"); 
      http.addHeader("Content-Type", "application/json");
      http.POST(buf); 
      server.send(200, F("application/json"), buf);
      Serial.print(F("done."));
      Serial.print(buf);
}

void doorClose(){
      servo.write(0);
      showDoorStatus();
  }
void doorOpen(){
      servo.write(180);
      showDoorStatus();
  }
 
// Define routing
void restServerRouting() {
    server.on(F("/showDoorStatus"), HTTP_GET, showDoorStatus);
    server.on(F("/doorClose"), HTTP_GET, doorClose);
    server.on(F("/doorOpen"), HTTP_GET, doorOpen);
}

void setup(void) {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("");

  
   // initialize with the I2C addr 0x3C
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);  

  // Clear the buffer.
  display.clearDisplay();

 servo.attach(2); //D4
 servo.write(0);
 pinMode(ledPin, OUTPUT); // declare LED as output 
 pinMode(inputPin, INPUT); // declare Infrared sensor as input
 pinMode(buzzer, OUTPUT);
 
  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  // Set server routing
  restServerRouting();
  // Start server
  server.begin();
  Serial.println("HTTP server started");

}
 
void loop(void) {
  server.handleClient();
  val = digitalRead(inputPin); // read input value 
   if (val == HIGH || servo.read() == 180 )
   { // check if the input is HIGH
      digitalWrite(ledPin, HIGH); // turn LED ON   
      digitalWrite(buzzer, HIGH);
      Serial.println(val);
      Serial.println("Door open");

   // Display Text
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0,28);
  display.println("Door open!");
  display.display();
  display.clearDisplay();
   } 
   else 
   { 
      digitalWrite(ledPin, LOW); // turn LED OFF 
      digitalWrite(buzzer, LOW);
      Serial.println(val);
      Serial.println("Door close");

  // Display Text
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0,28);
  display.println("Door close!");
  display.display();
  display.clearDisplay();
     
   }
}
