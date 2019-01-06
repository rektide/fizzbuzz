#!/usr/bin/env bash
IFS=$'\n' ./fizzbuzz.js|grep FizzBuzz|wc|awk '{print $1}'
