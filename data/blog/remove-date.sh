#!/bin/bash

# Loop through all .mdx files in the current directory
for file in *.mdx
do
    # Check if the file name matches the date format using a regex
    if [[ $file =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}-(.+)$ ]]; then
        # If it matches, rename the file to remove the date prefix
        mv -- "$file" "${BASH_REMATCH[1]}"
    fi
done
