import React from 'react';
import InputWrapper from './InputWrapper';
import { APP_TITLE, APP_TITLE_EMOJI } from '../../assets/text/en_US';

export default function Header(props) {
    return (
        <header>
            <h1>
              {APP_TITLE}{' '}
              {APP_TITLE_EMOJI.map((emoji, idx) => (
                <span key={idx} role="img" aria-label={idx === 0 ? 'unicorn' : 'sparkles'}>
                  {emoji}
                </span>
              ))}
            </h1>
            <InputWrapper {...props} />
        </header>
    );
}
