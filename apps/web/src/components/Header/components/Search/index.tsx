import Button from '@/components/Button';
import { SearchIcon } from '@/components/IconSvg';

export default function Search() {
  return (
    <form className="w-1/2">
      <div className="relative">
        <input
          className="border-[#dadada] w-full px-4 py-3 border-2 border-solid rounded-full placeholder-[#dadada]"
          placeholder="Search"
        />
        <Button
          type="icon"
          Icons={SearchIcon}
          classNames="bg-primary absolute right-[1%] top-1/2 -translate-y-1/2"
        />
      </div>
    </form>
  );
}
