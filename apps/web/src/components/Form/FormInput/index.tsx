import classNames from 'classnames/bind';

import styles from './styles.module.scss';
import { global } from '@/types/global';

const cx = classNames.bind(styles);

export default function FormInput({ data }: { data: global.TFormDataLogin }) {
  return (
    <div className={cx('item_input')}>
      {data.typeInput === 'input' ? (
        <input
          pattern={data?.pattern}
          required={data.require}
          className="border-[1px] border-[#dadada] border-solid focus:border-[#000] px-4 py-3 w-full   rounded-xl cursor-pointer"
          placeholder={data.placeholder}
          name={data.name}
          type={data.type}
        />
      ) : (
        <select
          onChange={data.onChange}
          name={data.name}
          disabled={data.disabled}
          className={`rounded-lg py-4 px-6 ${
            data.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          value={data.value}
        >
          {data?.options?.map((dopt) => {
            return (
              <option key={dopt} value={dopt.toString().toUpperCase()}>
                {dopt}
              </option>
            );
          })}
        </select>
      )}
      <span className="hidden text-red-600 ">{data.messageError}</span>
    </div>
  );
}
