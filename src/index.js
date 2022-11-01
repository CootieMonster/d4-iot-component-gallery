import "./styles.css";
import "d4-temperature-sensor";

document.getElementById("app").innerHTML = `
<h1>Hello Dimension4!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<d4-temperature-sensor latitude="51.5072" longitude="0.1276" ></d4-temperature-sensor>
`;
