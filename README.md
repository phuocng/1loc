# Favorite single line of code

What's your favorite JavaScript single LOC (line of code)? Let me know!

## Running it on local

1. Clone the project:

```shell
$ git clone git@github.com:phuocng/1loc.git
```

2. Install the dependencies:

```shell
$ cd 1loc
$ npm install
```

3. Run it on the local:

```shell
$ npm run start
```

Open http://localhost:8081 in your browser to see it in action.

## Running in Windows Machine

1. Install copyfiles package 

~~~ console
$ npm install --save-dev copyfiles
~~~

2. Install rimraf package 

~~~ console 
$ npm install --save-dev rimraf
~~~

3. Modified the `copy` line in `package.json` to this 

~~~ console 
"copy": "rimraf dist && mkdir dist && npx copyfiles public/* dist"
~~~

4. Finally, run it on the local: 

~~~ console
$ npm run dev-server
~~~

## Contributing

Pull requests are welcomed. To submit your favorite JavaScript single line of code, please create a markdown file, and put it in
a particular category of the [contents](contents) folder.

## About

This project is developed by _Nguyen Huu Phuoc_. I love building products and sharing knowledge.

Be my friend on

-   [Twitter](https://twitter.com/nghuuphuoc)
-   [Github](https://github.com/phuocng)
