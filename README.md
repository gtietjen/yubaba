<p align="center">
  <img src="https://github.com/madou/yubaba/blob/master/icon.png?raw=true" style="margin:0 auto" />
</p>

<h1 align="center">
  yubaba

  <a href="https://travis-ci.org/madou/yubaba"><img alt="Build Status" src="https://travis-ci.org/madou/yubaba.svg?branch=master"></a>
  <a href="https://codecov.io/gh/madou/yubaba"><img alt="codecov" src="https://codecov.io/gh/madou/yubaba/branch/master/graph/badge.svg"></a>
  <a href="https://david-dm.org/madou/yubaba"><img alt="Dependency Status" src="http://img.shields.io/david/madou/yubaba.svg?style=flat-squarer"></a>
  <a href="https://david-dm.org/madou/yubaba?type=dev"><img alt="devDependencies Status" src="https://david-dm.org/madou/yubaba/dev-status.svg"></a>
</h1>

Yubaba is an animation orchestration library that aims to make complex animations between page elements easy. React bindings are available, with Vue, Angular, and more coming soon.

Let's assume we're using React. It's as easy as:

1. Declaring your start component:

```javascript
import Animate from 'react-yubaba';

const SmallBox = () => (
  <Animate
    pair="my-animation"
    animations={[{
      animationName: 'move',
      duration: 500,
    }]}
  >
    <div className="my-small-box" />
  </Animate>
);
```

2. Declaring your end component:

```javascript
import Animate from 'react-yubaba';

const BigBox = () => (
  <Animate
    pair="my-animation"
    animations={[{
      animationName: 'move',
      duration: 500,
    }]}
  >
    <div className="my-big-box" />
  </Animate>
);
```

3. And mounting them when appropriate:

```javascript
import BigBox from './big-box';
import SmallBox from './small-box';

const BoxShower = ({ bigShown }) => (
  <div>
    {bigShown && <BigBox />}
    {bigShown || <SmallBox />}
  </div>
);
```

Yubaba does all the heavy lifting behind the scenes! Check out the READMEs below.

## [Yubaba Core README](https://github.com/madou/yubaba/blob/master/packages/core/README.md)

## [React Bindings README](https://github.com/madou/yubaba/blob/master/packages/react/README.md)

## [Troubleshooting](https://github.com/madou/yubaba/blob/master/TROUBLESHOOTING.md)

## Examples

### [React: The Dark Side](https://github.com/madou/yubaba/tree/master/packages/react/test/examples/dark-side/)

<p align="center">
  <a href="https://madou.github.io/yubaba/"><img src="https://github.com/madou/yubaba/blob/master/packages/react/test/examples/dark-side/example.gif?raw=true" style="margin:0 auto" /></a>
</p>
