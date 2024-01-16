import linkifyIt from 'linkify-it';
import React, { forwardRef, useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';

import s from './styles.module.scss';

type TextColor =
  | 'darkblack'
  | 'white'
  | 'lightgray'
  | 'ashgray'
  | 'coldgray'
  | 'darkgray'
  | 'red'
  | 'lightblue'
  | 'darkblue'
  | 'palegreen'
  | 'typography';

type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body_lg__r'
  | 'body_lg__s'
  | 'body_lg__b'
  | 'body_md__r'
  | 'body_md__s'
  | 'body_md__b'
  | 'body_sm__r'
  | 'body_sm__s'
  | 'body_sm__b'
  | 'body_s__r'
  | 'body_s__s'
  | 'body_s__b';

type TextProps = React.HTMLProps<HTMLElement> & {
  variant?: TextVariant;
  color?: TextColor;
  className?: string;
  tag?: 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'label';
};

// eslint-disable-next-line react/display-name
const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
  const { color = 'midnightblue', variant, className, tag = 'p', children, ...restProps } = props;
  const tagComponents: { [key: string]: React.ElementType } = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    p: 'p',
    span: 'span',
    label: 'label',
  };
  const Tag = tagComponents[tag] || 'p';

  const content = useMemo((): React.ReactNode => {
    const linkified = linkifyIt()
      .tlds(['com'])
      .match(children?.toString() || '');
    if (linkified) {
      let lastIndex = 0;
      const result: React.ReactNode[] = [];

      linkified.forEach((match, index) => {
        const { index: matchIndex, text } = match;

        if (matchIndex > lastIndex) {
          result.push(children?.toString().substring(lastIndex, matchIndex));
        }

        result.push(
          // eslint-disable-next-line react/no-array-index-key
          <a key={index} href={match.url} target="_blank">
            {text}
          </a>
        );

        lastIndex = matchIndex + text.length;
      });

      // Add the remaining text after the last match
      if (lastIndex < children!.toString().length) {
        result.push(children?.toString().substring(lastIndex));
      }

      return result;
    }

    return children;
  }, [children]);

  return content ? (
    <Tag
      {...restProps}
      onClick={props.onClick}
      ref={ref}
      className={`${s.text} ${color ? s[color] : null} 
      ${variant ? s[variant] : null}  ${className}`}
    >
      {content}
    </Tag>
  ) : (
    <Skeleton />
  );
});

export default Text;
