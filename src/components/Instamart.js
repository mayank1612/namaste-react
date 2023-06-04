import React from 'react';
import { useState } from 'react';

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black my-3 p-3">
      <div className="text-2xl">{title}</div>
      <button
        className="cursor-pointer underline"
        onClick={setIsVisible(!isVisible)}
      >
        {isVisible ? 'show' : 'hide'}
      </button>
      {isVisible && <div>{desc}</div>}
    </div>
  );
};

const sectionsArray = [
  {
    title: 'Teams',
    desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
  },
  {
    title: 'Career',
    desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
  },
  {
    title: 'About',
    desc: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
  },
];

function Instamart() {
  const [isVisible, setIsVisible] = useState('Teams');

  return (
    <div className="m-3">
      <h1 className="font-bold text-3xl">Instamart</h1>
      {sectionsArray.map((data, index) => {
        return (
          <Section
            key={index}
            {...data}
            isVisible={isVisible}
            setIsVisible={() => {
              setIsVisible(data.title);
            }}
          />
        );
      })}
    </div>
  );
}

export default Instamart;
