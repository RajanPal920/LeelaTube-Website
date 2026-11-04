import {
  TUBE_DIMENSION_THICKNESSES,
  TUBE_DIMENSION_DATA,
} from "../../../data/productSpecifications";

export default function TubeDimensionTable() {
  return (
    <div className="exact-table-card">
      <div className="exact-table-scroll-wrapper">
        <table
          className="exact-grid-table"
          aria-label="Tube Dimension – Weight Chart"
        >
          <thead>
            {/* Header Row 1: Wall thickness in mm. */}
            <tr>
              <th style={{ minWidth: "120px" }}>Wall thickness in mm.</th>
              {TUBE_DIMENSION_THICKNESSES.map((thk) => (
                <th key={thk} style={{ minWidth: "68px" }}>
                  {thk}
                </th>
              ))}
            </tr>

            {/* Header Row 2: O.D. in mm. & Weight in kg/meter */}
            <tr>
              <th>O.D. in mm.</th>
              <th colSpan={TUBE_DIMENSION_THICKNESSES.length}>
                Weight in kg/meter
              </th>
            </tr>
          </thead>
          <tbody>
            {TUBE_DIMENSION_DATA.map((row) => (
              <tr key={row.od}>
                <td>{row.od}</td>
                {TUBE_DIMENSION_THICKNESSES.map((thk) => {
                  const val = row.weights[thk];
                  const isDash = val === "-";
                  return (
                    <td key={thk} className={isDash ? "cell-dash" : ""}>
                      {val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

