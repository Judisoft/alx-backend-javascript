export default createInt8TypedArray(length, position, value)
const buffer = new ArrayBuffer(length);
const view = new DataView(buffer);

if (postition >= length) {
    return new Error('Position out of range');
} else {
    view.setInt8(position, value);
  return view;
}
