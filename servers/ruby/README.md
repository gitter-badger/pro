## Role

Backend.

## Setup

```
cd servers/ruby
bundle
```

## Procfile

```
ruby-1: sh -c 'cd ./servers/ruby && exec ruby entry.rb'
ruby-2: sh -c 'cd ./servers/ruby && exec ruby entry.rb'
ruby-3: sh -c 'cd ./servers/ruby && exec ruby entry.rb'
ruby-4: sh -c 'cd ./servers/ruby && exec ruby entry.rb'
```
