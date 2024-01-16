'use client';

import { MouseEvent, useEffect, useRef, useState } from 'react';

import { DATA_MODE_POST } from '@/constant/data-form';
import { useRefs } from '@/hooks/useRefs';
import { useStore } from '@/stores/stores';
import { cn } from '@/utils';

import Text from '../Text';
import styles from './styles.module.scss';
import { global } from '@/types/global';
import { post } from '@/types/post';

function FormCustomSelect({ data }: { data: global.TDataSelect[] }): JSX.Element {
  const { setPostMode } = useStore();
  const formWrapperRef = useRef<HTMLDivElement>(null);
  const selectBtn = useRef<HTMLButtonElement>(null);
  const buttonSelectRef = useRef<HTMLSpanElement>(null);
  const { refsByKey, setRef } = useRefs();
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [currentMode, setCurrentMode] = useState<number>(0);

  useEffect(() => {
    const listSelect = Object.values(refsByKey);

    listSelect.forEach((option, index) => {
      function handler(e: any) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'click' && e.clientX !== 0 && e.clientY !== 0) {
          setCurrentMode(index);
          const value = option?.children[0].children[0].getAttribute('name') as post.TMode;
          setPostMode(value);
          if (isDropdown) {
            setIsDropdown(false);
          }
        }
      }
      option && option.addEventListener('click', handler);
    });
  }, [isDropdown, currentMode]);

  const handleDropdown = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    selectBtn.current!.setAttribute(
      'aria-expanded',
      selectBtn.current!.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
    setIsDropdown(!isDropdown);
  };

  return (
    <div ref={formWrapperRef} className={cn(styles.wrapper)}>
      <button
        className={cn(styles.wrapper__button_select)}
        role="combobox"
        ref={selectBtn}
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="select-dropdown"
        onClick={handleDropdown}
      >
        <span ref={buttonSelectRef} className={cn('text-left whitespace-nowrap')}>
          <label
            htmlFor={DATA_MODE_POST[currentMode].name}
            className={cn(styles.label, styles.label__main)}
          >
            {DATA_MODE_POST[currentMode].icon()}
            <Text variant="body_s__r">{DATA_MODE_POST[currentMode].title}</Text>
          </label>
        </span>
        <span
          className={cn(
            styles.wrapper__button_arrow,
            isDropdown ? styles.wrapper__button_arrow_active : ''
          )}
        ></span>
      </button>
      <ul
        className={cn(
          styles.wrapper__select_dropdown,
          isDropdown ? styles.wrapper__select_dropdown_active : ''
        )}
        role="listbox"
        id="select-dropdown"
      >
        {data.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id} role="option" ref={(el): void => setRef(el, `${item.id}`)}>
              <Text variant="body_s__b">
                <input type="radio" name={item.name} />
                <label htmlFor={item.name} className={cn(styles.label)}>
                  <Icon />
                  {item.title}
                </label>
              </Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FormCustomSelect;
