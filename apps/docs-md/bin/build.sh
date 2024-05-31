#!/bin/bash

if [ -z "$1" ]; then
  echo "Syntax: build.sh <DOCS_DIR>"
  exit 1
fi

DOCS=${1}

# remove old docsify sidebar
rm -rf $DOCS/_sidebar.md

# Remark: normalize markdowns and validate links
remark -f --use remark-validate-links $DOCS -o $DOCS

# generate docsify sidebar from *.md files
echo '<!-- Generated automatically by prepare-docsify.sh -->' > $DOCS/_sidebar.md

echo '* [Home](README.md)' >> $DOCS/_sidebar.md

for file in "$DOCS"/*.md; do
  # Get the base name of the file
  base_file=$(basename "$file")

  # Skip README.md and files starting with _
  if [ "$base_file" = "README.md" ] || [[ "$base_file" == _* ]]; then
      continue
  fi

  # Get the filename without the directory
  filename_without_dir="${base_file}"

  # Get the filename without the extension
  filename_without_ext="${filename_without_dir%.*}"

  # Capitalize the filename without the extension
  capitalized_filename=$(echo "$filename_without_ext" | sed 's/.*/\u&/')

  # Write the formatted line to log.txt
  echo "* [$capitalized_filename]($filename_without_dir)" >> $DOCS/_sidebar.md
done

echo '* [Glossary](_glossary.md)' >> $DOCS/_sidebar.md
