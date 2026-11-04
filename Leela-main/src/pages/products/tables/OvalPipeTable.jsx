import { OVAL_PIPE_DATA } from "../../../data/productSpecifications";

export default function OvalPipeTable() {
  return (
    <div className="exact-table-card">
      <div className="exact-table-scroll-wrapper">
        <table
          className="exact-grid-table"
          aria-label="Oval Pipe – Dimensional Specification Chart"
        >
          <thead>
            <tr>
              <th style={{ minWidth: "150px" }}>Profile (Major x Minor)</th>
              <th style={{ minWidth: "110px" }}>Major Axis (mm)</th>
              <th style={{ minWidth: "110px" }}>Minor Axis (mm)</th>
              <th style={{ minWidth: "150px" }}>Wall Thickness Range</th>
              <th style={{ minWidth: "160px" }}>Available Finishes</th>
              <th style={{ minWidth: "180px" }}>Key Applications</th>
            </tr>
            <tr>
              <th>ERW Oval Profile</th>
              <th colSpan={5}>
                Certified Dimensional &amp; Finish Range (Custom Tooling &amp; Tolerances)
              </th>
            </tr>
          </thead>
          <tbody>
            {OVAL_PIPE_DATA.map((row) => (
              <tr key={row.profile}>
                <td style={{ fontWeight: 600 }}>{row.profile}</td>
                <td>{row.major}</td>
                <td>{row.minor}</td>
                <td>{row.wallThick}</td>
                <td>{row.finish}</td>
                <td>{row.app}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

