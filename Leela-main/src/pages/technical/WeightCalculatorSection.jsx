import { useState } from "react";
import { Link } from "react-router-dom";

const PRODUCT_MATERIALS = [
  { name: "Steel (default)", density: 7.85 },
  { name: "Stainless Steel 304 / 304L", density: 7.93 },
  { name: "Stainless Steel 316 / 316L", density: 8.00 },
  { name: "Stainless Steel 310 / 310S", density: 7.98 },
  { name: "Stainless Steel 321", density: 7.92 },
  { name: "Stainless Steel 202", density: 7.86 },
  { name: "Stainless Steel 201", density: 7.86 },
  { name: "Stainless Steel 409 / 410", density: 7.75 },
  { name: "Stainless Steel 904L", density: 8.05 },
  { name: "Inconel 600 / 625", density: 8.44 },
  { name: "Incoloy 800 / 825", density: 7.94 },
];

export default function WeightCalculatorSection() {
  const [material, setMaterial] = useState("Stainless Steel 304 / 304L");
  const [shape, setShape] = useState("Round"); // "Round" | "Square" | "Rectangular" | "Oval"
  const [quantity, setQuantity] = useState("1");

  // Dimensional inputs
  const [diameter, setDiameter] = useState("25.4");
  const [diameterUnit, setDiameterUnit] = useState("mm");

  const [width, setWidth] = useState("25.0");
  const [widthUnit, setWidthUnit] = useState("mm");

  const [height, setHeight] = useState("50.0");
  const [heightUnit, setHeightUnit] = useState("mm");

  const [thickness, setThickness] = useState("1.6");
  const [thicknessUnit, setThicknessUnit] = useState("mm");

  const [length, setLength] = useState("6.0");
  const [lengthUnit, setLengthUnit] = useState("m");

  // Output results
  const [resultLbs, setResultLbs] = useState("");
  const [resultKgs, setResultKgs] = useState("");
  const [extraMetrics, setExtraMetrics] = useState(null);
  const [calcError, setCalcError] = useState("");

  // Convert any dimension to mm
  const toMm = (valStr, unit) => {
    const v = parseFloat(valStr);
    if (isNaN(v)) return 0;
    if (unit === "in") return v * 25.4;
    return v;
  };

  // Convert length to meters
  const toMeters = (valStr, unit) => {
    const v = parseFloat(valStr);
    if (isNaN(v)) return 0;
    if (unit === "m") return v;
    if (unit === "ft") return v * 0.3048;
    if (unit === "in") return (v * 25.4) / 1000;
    if (unit === "mm") return v / 1000;
    return v;
  };

  const handleCalculate = () => {
    setCalcError("");
    const matObj = PRODUCT_MATERIALS.find((m) => m.name === material) || PRODUCT_MATERIALS[1];
    const density = matObj.density; // g/cm³
    const qty = parseInt(quantity, 10);
    const thkMm = toMm(thickness, thicknessUnit);
    const lenM = toMeters(length, lengthUnit);

    if (isNaN(qty) || qty <= 0) {
      setCalcError("Please enter a valid quantity (1 or more).");
      return;
    }
    if (thkMm <= 0 || lenM <= 0) {
      setCalcError("Please enter positive numerical values for thickness and length.");
      return;
    }

    let areaMm2 = 0;

    if (shape === "Round") {
      const dMm = toMm(diameter, diameterUnit);
      if (dMm <= 0) {
        setCalcError("Please enter a valid diameter greater than 0.");
        return;
      }
      if (thkMm >= dMm / 2) {
        setCalcError("Wall thickness cannot be greater than or equal to half the outer diameter.");
        return;
      }
      // π/4 * (D² - (D - 2t)²)
      areaMm2 = Math.PI * (dMm - thkMm) * thkMm;
    } else if (shape === "Square") {
      const wMm = toMm(width, widthUnit);
      if (wMm <= 0) {
        setCalcError("Please enter a valid width/side greater than 0.");
        return;
      }
      if (thkMm >= wMm / 2) {
        setCalcError("Wall thickness cannot be greater than or equal to half the side width.");
        return;
      }
      // W² - (W - 2t)²
      areaMm2 = 4 * (wMm - thkMm) * thkMm;
    } else if (shape === "Rectangular") {
      const wMm = toMm(width, widthUnit);
      const hMm = toMm(height, heightUnit);
      if (wMm <= 0 || hMm <= 0) {
        setCalcError("Please enter valid width and height greater than 0.");
        return;
      }
      if (thkMm >= wMm / 2 || thkMm >= hMm / 2) {
        setCalcError("Wall thickness cannot be greater than or equal to half the width or height.");
        return;
      }
      // W*H - (W-2t)*(H-2t)
      areaMm2 = 2 * (wMm + hMm - 2 * thkMm) * thkMm;
    } else if (shape === "Oval") {
      const wMm = toMm(width, widthUnit);
      const hMm = toMm(height, heightUnit);
      if (wMm <= 0 || hMm <= 0) {
        setCalcError("Please enter valid major and minor axes greater than 0.");
        return;
      }
      if (thkMm >= wMm / 2 || thkMm >= hMm / 2) {
        setCalcError("Wall thickness cannot be greater than or equal to half the oval dimensions.");
        return;
      }
      // π/4 * [W*H - (W-2t)*(H-2t)]
      areaMm2 = (Math.PI / 4) * (wMm * hMm - (wMm - 2 * thkMm) * (hMm - 2 * thkMm));
    }

    // Weight per meter in kg/m
    const wtPerMeter = (areaMm2 * density) / 1000;
    const wtPerPiece = wtPerMeter * lenM;
    const totalKgs = wtPerPiece * qty;
    const totalLbs = totalKgs * 2.20462;

    setResultKgs(totalKgs.toFixed(3));
    setResultLbs(totalLbs.toFixed(3));
    setExtraMetrics({
      wtPerMeter: wtPerMeter.toFixed(3),
      wtPerPiece: wtPerPiece.toFixed(3),
      totalLengthM: (lenM * qty).toFixed(2),
      tonnageMT: (totalKgs / 1000).toFixed(4),
    });
  };

  const handleClear = () => {
    setMaterial("Stainless Steel 304 / 304L");
    setShape("Round");
    setQuantity("1");
    setDiameter("25.4");
    setDiameterUnit("mm");
    setWidth("25.0");
    setWidthUnit("mm");
    setHeight("50.0");
    setHeightUnit("mm");
    setThickness("1.6");
    setThicknessUnit("mm");
    setLength("6.0");
    setLengthUnit("m");
    setResultLbs("");
    setResultKgs("");
    setExtraMetrics(null);
    setCalcError("");
  };

  return (
    <section id="weight-calculator" className="tech-section-block" style={{ background: "#ffffff" }}>
      <div className="container">
        {/* Screenshot-Matching Instruction Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "#1f6635",
              margin: "0 0 8px 0",
              letterSpacing: "0.01em",
            }}
          >
            Enter value, select units and click on calculate. Result will be displayed.
          </p>
          <p style={{ fontSize: "0.86rem", color: "#64748b", margin: 0 }}>
            Supports all Leela Tube manufacturing profiles: Round Tubes, Square Pipes, Rectangular Sections &amp; Oval Tubes
          </p>
        </div>

        {/* Error Alert if any */}
        {calcError && (
          <div
            style={{
              maxWidth: "780px",
              margin: "0 auto 20px",
              padding: "12px 18px",
              background: "#fef2f2",
              border: "1px solid #f87171",
              borderRadius: "4px",
              color: "#991b1b",
              fontSize: "0.88rem",
              fontWeight: 600,
            }}
          >
            ⚠️ {calcError}
          </div>
        )}

        {/* =========================================================================
            SIMPLE TABLE FORMAT WEIGHT CALCULATOR (Exact Reference Screenshot Match)
            ========================================================================= */}
        <div className="simple-calc-container">
          <table className="exact-calc-ref-table">
            <thead>
              <tr>
                <th colSpan={2} className="calc-table-section-title">
                  Enter your values
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row: Material */}
              <tr>
                <td className="calc-label-cell">Material:</td>
                <td className="calc-control-cell">
                  <select
                    className="calc-select-main"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    aria-label="Material"
                  >
                    {PRODUCT_MATERIALS.map((m) => (
                      <option key={m.name} value={m.name}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>

              {/* Row: Shape */}
              <tr>
                <td className="calc-label-cell">Shape:</td>
                <td className="calc-control-cell">
                  <select
                    className="calc-select-main"
                    value={shape}
                    onChange={(e) => setShape(e.target.value)}
                    aria-label="Shape"
                  >
                    <option value="Round">Round</option>
                    <option value="Square">Square</option>
                    <option value="Rectangular">Rectangular</option>
                    <option value="Oval">Oval</option>
                  </select>
                </td>
              </tr>

              {/* Row: Quantity */}
              <tr>
                <td className="calc-label-cell">Quantity:</td>
                <td className="calc-control-cell">
                  <input
                    type="number"
                    min="1"
                    className="calc-input-number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    aria-label="Quantity"
                  />
                </td>
              </tr>

              {/* Dynamic Dimension 1: Diameter or Width */}
              {shape === "Round" ? (
                <tr>
                  <td className="calc-label-cell">Diameter :</td>
                  <td className="calc-control-cell">
                    <div className="calc-field-group">
                      <input
                        type="number"
                        step="any"
                        min="0"
                        className="calc-input-number"
                        value={diameter}
                        onChange={(e) => setDiameter(e.target.value)}
                        aria-label="Diameter"
                      />
                      <select
                        className="calc-select-unit"
                        value={diameterUnit}
                        onChange={(e) => setDiameterUnit(e.target.value)}
                        aria-label="Diameter Unit"
                      >
                        <option value="mm">mm</option>
                        <option value="in">in</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td className="calc-label-cell">
                    {shape === "Square"
                      ? "Width / Side :"
                      : shape === "Rectangular"
                      ? "Width :"
                      : "Major Axis (Width) :"}
                  </td>
                  <td className="calc-control-cell">
                    <div className="calc-field-group">
                      <input
                        type="number"
                        step="any"
                        min="0"
                        className="calc-input-number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        aria-label="Width"
                      />
                      <select
                        className="calc-select-unit"
                        value={widthUnit}
                        onChange={(e) => setWidthUnit(e.target.value)}
                        aria-label="Width Unit"
                      >
                        <option value="mm">mm</option>
                        <option value="in">in</option>
                      </select>
                    </div>
                  </td>
                </tr>
              )}

              {/* Dynamic Dimension 2: Height (for Rectangular & Oval only) */}
              {(shape === "Rectangular" || shape === "Oval") && (
                <tr>
                  <td className="calc-label-cell">
                    {shape === "Rectangular" ? "Height :" : "Minor Axis (Height) :"}
                  </td>
                  <td className="calc-control-cell">
                    <div className="calc-field-group">
                      <input
                        type="number"
                        step="any"
                        min="0"
                        className="calc-input-number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        aria-label="Height"
                      />
                      <select
                        className="calc-select-unit"
                        value={heightUnit}
                        onChange={(e) => setHeightUnit(e.target.value)}
                        aria-label="Height Unit"
                      >
                        <option value="mm">mm</option>
                        <option value="in">in</option>
                      </select>
                    </div>
                  </td>
                </tr>
              )}

              {/* Row: Thickness */}
              <tr>
                <td className="calc-label-cell">Thickness :</td>
                <td className="calc-control-cell">
                  <div className="calc-field-group">
                    <input
                      type="number"
                      step="any"
                      min="0"
                      className="calc-input-number"
                      value={thickness}
                      onChange={(e) => setThickness(e.target.value)}
                      aria-label="Thickness"
                    />
                    <select
                      className="calc-select-unit"
                      value={thicknessUnit}
                      onChange={(e) => setThicknessUnit(e.target.value)}
                      aria-label="Thickness Unit"
                    >
                      <option value="mm">mm</option>
                      <option value="in">in</option>
                    </select>
                  </div>
                </td>
              </tr>

              {/* Row: Length */}
              <tr>
                <td className="calc-label-cell">Length :</td>
                <td className="calc-control-cell">
                  <div className="calc-field-group">
                    <input
                      type="number"
                      step="any"
                      min="0"
                      className="calc-input-number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      aria-label="Length"
                    />
                    <select
                      className="calc-select-unit"
                      value={lengthUnit}
                      onChange={(e) => setLengthUnit(e.target.value)}
                      aria-label="Length Unit"
                    >
                      <option value="m">m</option>
                      <option value="ft">ft</option>
                      <option value="in">in</option>
                      <option value="mm">mm</option>
                    </select>
                  </div>
                </td>
              </tr>

              {/* Buttons Row */}
              <tr>
                <td colSpan={2} className="calc-btn-cell">
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <button
                      type="button"
                      className="calc-action-btn calc-btn-calculate"
                      onClick={handleCalculate}
                    >
                      Calculate
                    </button>
                    <button
                      type="button"
                      className="calc-action-btn calc-btn-clear"
                      onClick={handleClear}
                    >
                      Clear
                    </button>
                  </div>
                </td>
              </tr>

              {/* Results Header */}
              <tr>
                <th colSpan={2} className="calc-table-section-title">
                  Results:
                </th>
              </tr>

              {/* Result Row 1: Lbs */}
              <tr>
                <td className="calc-label-cell">Calculated Weight:</td>
                <td className="calc-control-cell">
                  <div className="calc-result-input-wrap">
                    <input
                      type="text"
                      readOnly
                      className="calc-result-readonly-input"
                      value={resultLbs}
                      placeholder="0.000"
                    />
                    <span className="calc-result-unit">Lbs</span>
                  </div>
                </td>
              </tr>

              {/* Result Row 2: Kgs */}
              <tr>
                <td className="calc-label-cell">Calculated Weight:</td>
                <td className="calc-control-cell">
                  <div className="calc-result-input-wrap">
                    <input
                      type="text"
                      readOnly
                      className="calc-result-readonly-input"
                      value={resultKgs}
                      placeholder="0.000"
                    />
                    <span className="calc-result-unit">Kgs</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Extra Engineering Breakdown when calculated */}
        {extraMetrics && (
          <div
            style={{
              maxWidth: "780px",
              margin: "24px auto 0",
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "6px",
              padding: "18px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <span style={{ fontSize: "0.78rem", color: "#166534", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Engineering Breakdown
              </span>
              <div style={{ marginTop: "4px", fontSize: "0.9rem", color: "#14532d" }}>
                <strong>{extraMetrics.wtPerMeter} kg/m</strong> • <strong>{extraMetrics.wtPerPiece} kg/piece</strong> • Total: <strong>{extraMetrics.totalLengthM} meters</strong> ({extraMetrics.tonnageMT} MT)
              </div>
            </div>

            <div>
              <Link
                to="/quote"
                className="tool-btn tool-btn--primary"
                style={{ padding: "8px 20px", fontSize: "0.85rem", textDecoration: "none" }}
              >
                Inquire With Calculated Weight →
              </Link>
            </div>
          </div>
        )}

        {/* Disclaimer Note Box */}
        <div className="disclaimer-note-box" style={{ maxWidth: "780px", margin: "24px auto 0" }}>
          <strong>Theoretical Weight Disclaimer:</strong> Calculated weights are theoretical values derived from standard
          metallurgical geometric cross-section formulas and alloy densities. Actual mill delivery weight may vary within standard
          commercial ASTM/ASME manufacturing tolerances (±10%).
        </div>
      </div>
    </section>
  );
}
