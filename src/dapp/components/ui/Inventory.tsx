import React from "react";

import basket from "../../images/ui/basket.png";
import plantIcon from "../../images/ui/plant.png";
import hammer from "../../images/ui/hammer.png";
import close from "../../images/ui/close.png";

import leftEdgeInner from "../../images/ui/panel/lt_box_9slice_lc.png";
import rightEdgeInner from "../../images/ui/panel/lt_box_9slice_rc.png";
import topEdgeInner from "../../images/ui/panel/lt_box_9slice_tc.png";
import topLeftInner from "../../images/ui/panel/lt_box_9slice_tl.png";
import topRightInner from "../../images/ui/panel/lt_box_9slice_tr.png";

import { FruitItem } from "../../types/fruits";
import { Fruit } from "../../types/contract";

import { Plants } from "./Plants";
import { Items } from "./Items";
import { Tools } from "./Tools";

import "./Inventory.css";
import { Recipe, recipes } from "../../types/crafting";

type Tab = "Plants" | "Items" | "Tools";

interface Props {
  selectedFruit: Fruit;
  onSelectFruit: (fruit: Fruit) => void;
  balance: number;
  land: any[];
  fruits: FruitItem[];
  onClose: () => void;
}

export const Inventory: React.FC<Props> = ({
  selectedFruit,
  onSelectFruit,
  balance,
  land,
  fruits,
  onClose,
}) => {
  const [tab, setTab] = React.useState<Tab>("Plants");

  const [item, setItem] = React.useState<Recipe>(recipes[0]);

  return (
    <div>
      <img src={close} className="close-icon" onClick={onClose} />
      <div id="inventory-tabs">
        <div
          className={`inventory-tab ${tab === "Plants" && "active-tab"}`}
          onClick={() => setTab("Plants")}
        >
          <img src={plantIcon} alt="basket" className="tab-icon" />
          <span>Plants</span>
          {tab === "Plants" && (
            <>
              <img id="panel-left-edge" src={leftEdgeInner} />
              <img id="panel-right-edge" src={rightEdgeInner} />
              <img id="panel-top-edge" src={topEdgeInner} />
              <img id="panel-top-left" src={topLeftInner} />
              <img id="panel-top-right" src={topRightInner} />
            </>
          )}
        </div>
        <div
          className={`inventory-tab ${tab === "Tools" && "active-tab"}`}
          onClick={() => setTab("Tools")}
        >
          <img src={hammer} alt="basket" className="tab-icon" />
          <span>Tools</span>
          {tab === "Tools" && (
            <>
              <img id="panel-left-edge" src={leftEdgeInner} />
              <img id="panel-right-edge" src={rightEdgeInner} />
              <img id="panel-top-edge" src={topEdgeInner} />
              <img id="panel-top-left" src={topLeftInner} />
              <img id="panel-top-right" src={topRightInner} />
            </>
          )}
        </div>
        <div
          className={`inventory-tab ${tab === "Items" && "active-tab"}`}
          onClick={() => setTab("Items")}
        >
          <img src={basket} alt="basket" className="tab-icon" />
          <span>Inventory</span>
          {tab === "Items" && (
            <>
              <img id="panel-left-edge" src={leftEdgeInner} />
              <img id="panel-right-edge" src={rightEdgeInner} />
              <img id="panel-top-edge" src={topEdgeInner} />
              <img id="panel-top-left" src={topLeftInner} />
              <img id="panel-top-right" src={topRightInner} />
            </>
          )}
        </div>
      </div>
      {tab === "Plants" && (
        <Plants
          selectedFruit={selectedFruit}
          onSelectFruit={onSelectFruit}
          fruits={fruits}
          land={land}
          balance={balance}
        />
      )}
      {tab === "Items" && (
        <Items
          selectedItem={item}
          onSelectItem={setItem}
          fruits={fruits}
          land={land}
          balance={balance}
        />
      )}
      {tab === "Tools" && (
        <Tools
          selectedItem={item}
          onSelectItem={setItem}
          fruits={fruits}
          land={land}
          balance={balance}
        />
      )}
    </div>
  );
};
