import yayJpg from '../assets/yay.jpg';
import * as onig from 'vscode-oniguruma/release/onig.wasm';

console.log('onig', onig);

// const res = await fetch(onig.default);

// console.log('res', res);

// const res2 = await fetch("https://unpkg.com/vscode-oniguruma@2.0.1/release/onig.wasm");

// console.log('res2', res2);

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload. 11122
      </p>
    </div>
  );
}
