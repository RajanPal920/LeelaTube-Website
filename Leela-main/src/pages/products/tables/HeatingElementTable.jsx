import {
  HEATING_ELEMENT_THICKNESSES,
  HEATING_ELEMENT_DATA,
} from "../../../data/productSpecifications";

export default function HeatingElementTable() {
  return (
    <div className="exact-table-card" style={{ marginBottom: "24px" }}>
      <div className="exact-table-scroll-wrapper">
        <table
          className="exact-grid-table"
          aria-label="Heating Element Dimensions Table"
        >
          <thead>
            <tr>
              <th style={{ minWidth: "120px" }}>OD / THK</th>
              {HEATING_ELEMENT_THICKNESSES.map((thk) => (
                <th key={thk} style={{ minWidth: "68px" }}>
                  {thk}
                </th>
              ))}
            </tr>
            <tr>
              <th>Outer Diameter (mm)</th>
              <th colSpan={HEATING_ELEMENT_THICKNESSES.length}>
                Wall Thickness in mm. (✓ = Available)
              </th>
            </tr>
          </thead>
          <tbody>
            {HEATING_ELEMENT_DATA.map((row) => (
              <tr key={row.od}>
                <td style={{ fontWeight: 600 }}>{row.od}</td>
                {HEATING_ELEMENT_THICKNESSES.map((thk) => {
                  const isAvail = row.available.includes(thk);
                  return (
                    <td
                      key={thk}
                      className={isAvail ? "cell-check" : "cell-dash"}
                    >
                      {isAvail ? "✓" : "-"}
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
