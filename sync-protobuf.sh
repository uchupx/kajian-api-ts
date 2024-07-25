#! /bin/sh

branch = "master"

if [ -n "$1" ]; then
  branch = $1
fi

echo "Using branch $branch"
mkdir -p src/protobuf/

echo "Syncing protobuf from $branch"
git clone https://github.com/uchupx/kajian-api-proto.git -b $branch src/protobuf/
rm -rf src/protobuf/.git

