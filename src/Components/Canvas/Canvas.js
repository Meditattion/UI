import React, { useMemo, useReducer, useState } from "react";
import { LABEL_TYPE, ReactCanvasAnnotation } from "react-canvas-annotation";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Actions/index";
import CommonHeader from "../CommonHeader/CommonHeader";
import SelectorItem from "../SelectorItem/SelectorItem";
import Selectors from "../Selectors/Selectors";
import ToolBarItem from "../ToolBarItem/ToolBarItem";
import CanvasLabel from "../CanvasLabel/CanvasLabel"
const labelsDataDefault = {
  labelRects: [],
  labelPolygons: [],
};

const ZOOM_STEP = 0.1;

const Canvas = () => {
  const dispatch = useDispatch();

  const labelsIsVisible = useSelector((state) => state.Toggles.labelsVisible);
  const imagesIsVisible = useSelector((state) => state.Toggles.imagesVisible);
  const boundingBoxIsSelected = useSelector(
    (state) => state.Tools.boundingBox.isSelected
  );
  const polygonIsSelected = useSelector(
    (state) => state.Tools.polygon.isSelected
  );
  const classificationIsSelected = useSelector(
    (state) => state.Tools.classification.isSelected
  );
  const currentSelector = useSelector((state) => state.Tools.currentSelector);

  // const imageFile = useSelector(
  //   (state) => state.Tools.classification?.files?.[0]
  // );

    const imageFile = useSelector(
        (state) => state.Images.container?.[0]
    );

  console.log("currentSelector:", currentSelector);
  console.log("bound is sel", boundingBoxIsSelected);
  console.log("pol is sel", polygonIsSelected);
  console.log("classification is sel", classificationIsSelected);

  // useEffect(() => {
  //     dispatch(toggleMenu(user))
  //   }, [])


  const [newLabelCurds,setNewLabelCurds]=useState({top:60,left:0}) ;
  const [labels, setLabels] = useState(labelsDataDefault);
  const [annotationType, setAnnotationType] = useState(LABEL_TYPE.RECTANGLE);
  const [isImageDrag, toggleDragMode] = useReducer((p) => !p, false);

  const [zoom, setZoom] = useState(1);

  // can be used on icons
  const zoomAction = useMemo(
    () => ({
      default: () => setZoom(1),
      maxZoom: () => setZoom(2),
      zoom: (isZoomIn = true) => () =>
        setZoom((prev) => prev + (isZoomIn ? 1 : -1) * ZOOM_STEP),
    }),
    []
  );

  console.log(`imageFile`, imageFile);

  return (
    <div className="main-canvas">
      <CommonHeader>
        <div className="main-toolbar">
          <ToolBarItem flip="true" type="redo.svg"></ToolBarItem>
          <ToolBarItem type="redo.svg"></ToolBarItem>
          <ToolBarItem type="zoomIn.svg"></ToolBarItem>
          <ToolBarItem flip="true" type="zoomOut.svg"></ToolBarItem>
          <ToolBarItem type="hand.svg"></ToolBarItem>
          <ToolBarItem type="cursor.svg"></ToolBarItem>
          <Selectors>
            <SelectorItem
              selector="boundingBox"
              isSelected={boundingBoxIsSelected}
              type="bounding-box.svg"
            ></SelectorItem>
            <SelectorItem
              selector="polygon"
              isSelected={polygonIsSelected}
              type="polygon.svg"
            ></SelectorItem>
            <SelectorItem
              selector="classification"
              isSelected={classificationIsSelected}
              type="pin.svg"
            ></SelectorItem>
          </Selectors>
        </div>
      </CommonHeader>

      {imageFile && (
        <ReactCanvasAnnotation
          zoom={zoom}
          imageFile={imageFile}
          labels={labels}
          onChange={(data)=>{
              console.log("data",data);
              dispatch(actions.addCanvasLabel());
              // setNewLabelCurds({left:(data.labelRects[data.labelRects.length-1].rect.x),top:(data.labelRects[data.labelRects.length-1].rect.y +60)});
          }}
          annotationType={annotationType}
          isImageDrag={isImageDrag}
        />
      )}

          <CanvasLabel/>

      <button
        className={
          labelsIsVisible ? "toggle-labels flipHorizontal" : "toggle-labels "
        }
        onClick={() => dispatch(actions.toggleMenu("labels"))}
      >
        &#9658;
      </button>
      <button
        className={
          imagesIsVisible ? "toggle-images " : "toggle-images flipHorizontal"
        }
        onClick={() => dispatch(actions.toggleMenu("images"))}
      >
        &#9658;
      </button>
    </div>
  );
};

export default Canvas;
