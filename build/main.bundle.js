(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var getBeerAPIByName = function getBeerAPIByName(name) {
    return fetch("https://api.punkapi.com/v2/beers/?beer_name=" + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var obj = response;
        var result = "<table style='width: 50%;margin: auto;' >";
        result += "<tr style='background-color: #FFFF00;'>";
        result += "<th>" + "Image" + "</th>";
        result += "<th>" + "Beer name" + "</th>";
        result += "<th>" + "Description" + "</th>";
        result += "<th>" + "Yeast" + "</th>";
        result += "</tr>";
        for (var i = 0; i < obj.length; i++) {
            result += "<tr>";
            result += "<td>" + "<image src =" + obj[i].image_url + " style='width:50%;height:auto;'/></td>";
            result += "<td>" + obj[i].name + "</td>";
            result += "<td>" + obj[i].description + "</td>";
            result += "<td>" + obj[i].ingredients.yeast + "</td>";
            result += "</tr>";
        }
        result += "</table>";
        document.getElementById("result").innerHTML = result;
    });
};
var toSearch = function toSearch(name) {
    if (name != "") {
        getBeerAPIByName(name);
    } else {
        var result = "No result";
        document.getElementById('result').innerHTML = result;
    }
};

},{}]},{},[1]);
