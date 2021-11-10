import { ReactNode } from "react";
import { AmpIncludeAmpBind } from "./AmpCustomElement";

/**
 * Renders an amp-state element, by either adding local state via `value`
 * or remote state via the `src` property.
 *
 * @param {Props} props
 */
type AmpStateProps = {
  id: string;
  children?: ReactNode;
  src: string;
};
export default function AmpState(props: AmpStateProps) {
  return (
    <>
      <AmpIncludeAmpBind />
      <amp-state id={props.id} src={props.src}>
        {props.children && (
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(props.children),
            }}
          />
        )}
      </amp-state>
    </>
  );
}
