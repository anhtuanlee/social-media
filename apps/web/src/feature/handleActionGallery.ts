export const handleAddGallery = (listFiles: FileList, fileAdds: FileList): FileList => {
  const dataTransfer = new DataTransfer();
  if (listFiles) {
    for (let i = 0; i < Object.values(listFiles)?.length; i++) {
      const item = listFiles.item(i);
      if (item) {
        dataTransfer.items.add(item);
      }
    }
    for (let j = 0; j < Object.values(fileAdds)?.length; j++) {
      const itemAdd = fileAdds[j];
      dataTransfer.items.add(itemAdd);
    }

    const newFileList = dataTransfer.files;
    return newFileList;
  } else {
    for (let j = 0; j < Object.values(fileAdds)?.length; j++) {
      const itemAdd = fileAdds[j];
      dataTransfer.items.add(itemAdd);
    }

    const newFileList = dataTransfer.files;
    return newFileList;
  }
};

export const handleDeleteGallery = (listFiles: FileList, name: string) => {
  const dataTransfer = new DataTransfer();
  let idDel: number;
  for (let i = 0; i < listFiles.length; i++) {
    const item = listFiles.item(i);
    if (item) {
      dataTransfer.items.add(item);

      if (item.name === name) {
        idDel = i;
        dataTransfer.items.remove(idDel);
      }
    }
  }
  const newFileList = dataTransfer.files;
  return newFileList;
};
