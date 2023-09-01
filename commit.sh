#!/usr/env/bash
git add .;
msg=$(date "+%Y-%m-%d %H:%M:%S");
echo $msg;

git commit -m "$msg";

while true
do
  git push origin master;
  if [[ $? -eq 0 ]];
  then
    break;
  fi
done

echo done;