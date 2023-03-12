# OpenAI CLI

This is a small project to test out the OpenAI API by building a CLI in JavaScript.

* [Things you'll need](#things-youll-need)
* [Usage](#usage)
* [Contributing](#contributing)
  * [Code of Conduct](#code-of-conduct)
* [License](#license)

## Things you'll need

To interact with the OpenAI API you will need an [OpenAI platform account](https://platform.openai.com/overview). Once you have signed up, [create an API key](https://platform.openai.com/account/api-keys) from your account dashboard.

## Usage

Installation and usage is manual right now. To do so you should clone the repo and change into the new directory:

```
git clone https://github.com/philnash/asst.git
cd asst
```

Then install the dependencies:

```
npm install
```

You can then run the assistant with the command:

```
OPENAI_API_KEY=YOUR_OPENAI_API_KEY node index.js
```

You can also copy the `.env.example` to `.env` and enter your API key. Then you can use the following command to run the assistant:

```
npm start
```

You can now interact with your assistant. Start by giving the assistant a system instruction for how it should behave. Once you have done that, you can chat back and forth with the assistant on the command line.

## Contributing

1. Fork it ( https://github.com/philnash/asst/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

### Code of Conduct

Everyone interacting in the asst project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/philnash/asst/blob/master/CODE_OF_CONDUCT.md).

## License

This code is available as open source under the terms of the [MIT License](https://opensource.org/license/mit/).