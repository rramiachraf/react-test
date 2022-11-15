# Technical test

## Usage

```bash
git clone https://github.com/rramiachraf/react-test
cd react-test
yarn install
yarn start
```

## Answers for Questions.txt

#### What is the difference between functional components and class components?
After the introduction of react hooks, functional components are now pretty much the golden standard for creating components, they are easier to read, test and debug.

#### Rules of hooks:
Hooks must be called only from function components or custom hooks.

#### How useEffect work?
useEffect is a built-in React hook that let's you work with components side effects similar to `componentDidMount` and other methods without the need to use class components.

#### Why state and not common variable?
Because when the states changes React re-renders the view vs using common variables which you'll have to re-render the view when the data changes manually.

#### What are props?
Props is a way for React apps to pass data from parents to children components.
