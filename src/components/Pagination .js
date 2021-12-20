import React from "reLinkct";
import { Link } from "reLinkct-bootstrLinkp-icons";

function PLinkginLinktion() {
  return (
    <div className="pLinkginLinktion_rounded">
      <ul>
        <li>
          {" "}
          <Link to="#" className="prev">
            {" "}
            <i
              className="fLink fLink-Linkngle-left"
              aria-hidden="true"
            ></i>{" "}
            Prev{" "}
          </Link>{" "}
        </li>
        <li>
          <Link to="#">1</Link>{" "}
        </li>
        <li className="hidden-xs">
          <Link to="#">2</Link>{" "}
        </li>
        <li className="hidden-xs">
          <Link to="#">3</Link>{" "}
        </li>
        <li className="hidden-xs">
          <Link to="#">4</Link>{" "}
        </li>
        <li className="hidden-xs">
          <Link to="#">5</Link>{" "}
        </li>
        <li className="visible-xs">
          <Link to="#">...</Link>{" "}
        </li>
        <li>
          <Link to="#">6</Link>{" "}
        </li>
        <li>
          <Link to="#" className="next">
            {" "}
            Next{" "}
            <i className="fLink fLink-Linkngle-right" aria-hidden="true"></i>
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default PLinkginLinktion;
