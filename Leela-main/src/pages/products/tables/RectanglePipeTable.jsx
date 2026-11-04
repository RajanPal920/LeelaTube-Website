import { RECTANGULAR_PIPE_DATA } from "../../../data/productSpecifications";

export default function RectanglePipeTable() {
  return (
    <div className="exact-table-card">
      <div className="exact-table-scroll-wrapper">
        <table
          className="exact-grid-table"
          aria-label="Rectangle Pipe – Dimensional Specification Chart"
        >
          <thead>
            <tr>
              <th style={{ minWidth: "150px" }}>Profile Size (W x H mm)</th>
              <th style={{ minWidth: "100px" }}>Width (mm)</th>
              <th style={{ minWidth: "100px" }}>Height (mm)</th>
              <th style={{ minWidth: "160px" }}>Wall Thickness Range</th>
              <th style={{ minWidth: "180px" }}>Available Finishes</th>
              <th style={{ minWidth: "160px" }}>Supply Length</th>
            </tr>
            <tr>
              <th>ERW Rectangle Profile</th>
              <th colSpan={5}>
                Certified Dimensional &amp; Finish Range (ASTM A554 / Custom Spec)
              </th>
            </tr>
          </thead>
          <tbody>
            {RECTANGULAR_PIPE_DATA.map((row) => (
              <tr key={row.size}>
                <td style={{ fontWeight: 600 }}>{row.size}</td>
                <td>{row.width}</td>
                <td>{row.height}</td>
                <td>{row.wallThick}</td>
                <td>{row.finish}</td>
                <td>{row.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

