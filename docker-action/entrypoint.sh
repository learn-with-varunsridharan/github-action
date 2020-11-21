#!/bin/sh

# $1 will provide the value of who-to-greet
echo "Hello $1"

time=$(date)

echo "::set-output name=time::$time"
