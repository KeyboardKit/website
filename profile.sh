#!/bin/bash
source ~/.rvm/scripts/rvm
rvm use system 
bundle exec jekyll build --profile
