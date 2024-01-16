import { Blob } from 'buffer';

import { global } from '@/types/global';

class CoreHelper {
  constructor() {}
  convertDate(timer: Date) {
    const timerCurrent = new Date().getTime();
    const timerBefore = new Date(timer).getTime();
    const timeDifferent = timerCurrent - timerBefore;
    const minutes = Math.floor(timeDifferent / (1000 * 60)) % 60;
    const hours = Math.floor(timeDifferent / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDifferent / (1000 * 60 * 60 * 24));

    if (hours === 0 && days === 0) {
      return `${minutes} phút`;
    } else if (hours && days === 0) {
      return `${hours} giờ`;
    } else if (days) {
      return `${days} ngày`;
    } else if (days > 30) {
      return `${Math.floor(days / 30)} tháng`;
    } else if (days > 365) {
      return `${Math.floor(days / 365)} năm`;
    }
  }
  convertFilestToBlob(files: FileList): global.TDataBlob[] | undefined {
    if (files?.length > 0) {
      const listFiles = Array.from(files)?.map((file) => {
        const blob = URL.createObjectURL(file);
        return {
          url: blob,
          name: file.name,
        };
      });
      const res = listFiles as global.TDataBlob[];
      return res;
    }
  }
  async convertFileToBlob(file: File): Promise<global.TDataBlob | undefined> {
    if (file) {
      const blob = URL.createObjectURL(file);
      const data = {
        url: blob,
        name: file.name,
      };
      return data;
    }
  }
  async getBlobFromUrl(myImageUrl: any) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', myImageUrl, true);
      request.responseType = 'blob';
      request.onload = () => {
        resolve(request.response);
      };
      request.onerror = reject;
      request.send();
    });
  }

  async getDataFromBlob(myBlob: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(myBlob);
    });
  }

  async convertUrlToImageData(myImageUrl: any) {
    try {
      const myBlob = await this.getBlobFromUrl(myImageUrl);
      console.log(myBlob);
      const myImageData = await this.getDataFromBlob(myBlob);
      console.log(myImageData);
      return myImageData;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  convertContentToArray(content: FormDataEntryValue) {
    const newContent =
      typeof content === 'string' ? content.split(/\n{2,}/).filter((item) => item + '\n') : [];
    return newContent;
  }
}

export const helper = new CoreHelper();
