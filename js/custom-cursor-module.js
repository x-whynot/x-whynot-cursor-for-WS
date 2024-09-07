const { body } = document;
function setCursor(pathToImage, el, params = {}) {
  const cursor = params?.cursorEl ? params.cursorEl : document.createElement("div");
  cursor.style.width = cursor.style.height = params?.size || "64px";
  cursor.style.background = `url(${pathToImage}) no-repeat center top / cover`;
  cursor.style.position = "absolute";
  cursor.style.pointerEvents = "none"; // Добавлено, чтобы курсор не мешал взаимодействию

  if (!params?.noUseOverflow) el.style.overflow = "hidden";
  el.style.cursor = "none";
  el.append(cursor);

  el.addEventListener("mousemove", e => {
    const x = e.pageX;
    const y = e.pageY;

    cursor.style.top = `${y}px`;
    cursor.style.left = `${x}px`;
  });

  el.addEventListener("mouseenter", () => cursor.style.opacity = 1);
  el.addEventListener("mouseleave", () => cursor.style.opacity = 0);
}