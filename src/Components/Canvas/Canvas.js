import React, { useEffect, useMemo, useReducer, useState } from "react";
import { LABEL_TYPE, ReactCanvasAnnotation } from "react-canvas-annotation";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Actions/index";
import CanvasLabel from "../CanvasLabel/CanvasLabel";
import CanvasSuggestion from "../CanvasSuggestion/CanvasSuggestion";
import CommonHeader from "../CommonHeader/CommonHeader";
import SelectorItem from "../SelectorItem/SelectorItem";
import Selectors from "../Selectors/Selectors";
import ToolBarItem from "../ToolBarItem/ToolBarItem";

const labelsDataDefault = {
  labelRects: [],
  labelPolygons: [],
};

/* data example:
{
  labelRects: [
    {
      id: "Rect-Example",
      rect: {
        x: 697.2371134020618,
        y: 454.26804123711344,
        width: 717.0309278350516,
        height: 492.1237113402062,
      },
    },
  ],
  labelPolygons: [
    {
      id: `Poly-Example`,
      vertices: [
        { x: 623.7525773195875, y: 440.9072164948454 },
        { x: 1331.8762886597938, y: 305.07216494845363 },
        { x: 1641.4020618556701, y: 732.6185567010309 },
        { x: 882.0618556701031, y: 790.5154639175258 },
      ],
    },
  ],
}
*/

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

  const imageFile = useSelector((state) => state.Images.container?.[0]);

  let selectedImage;
  let canvasDOM;
  let canvasWidth;
  let canvasHeight;
  let imageWidthFactor;
  let imageHeightFactor;
  useEffect(() => {
    if (imageFile) {
      selectedImage = new Image();
      selectedImage.src = imageFile.preview;
      selectedImage.onload = () => {
        canvasDOM = document.getElementsByClassName("main-canvas")[0];
        canvasWidth = canvasDOM.offsetWidth;
        canvasHeight = canvasDOM.offsetHeight;
        imageWidthFactor = canvasWidth / selectedImage.width;
        imageHeightFactor = canvasHeight / selectedImage.height;
      };
    }
  }, imageFile);

  console.log("currentSelector:", currentSelector);
  console.log("bound is sel", boundingBoxIsSelected);
  console.log("pol is sel", polygonIsSelected);
  console.log("classification is sel", classificationIsSelected);

  let defaultSelector = LABEL_TYPE.RECTANGLE;
  useEffect(() => {
    switch (currentSelector) {
      case "boundingBox":
        defaultSelector = LABEL_TYPE.RECTANGLE;
      case "polygon":
        defaultSelector = LABEL_TYPE.POLYGON;
      default:
        defaultSelector = LABEL_TYPE.RECTANGLE;
    }
  }, []);

  const [newLabelCurds, setNewLabelCurds] = useState({ top: 60, left: 0 });
  const [labels, setLabels] = useState(labelsDataDefault);
  // const [annotationType, setAnnotationType] = useState(LABEL_TYPE.RECTANGLE);
  const [annotationType, setAnnotationType] = useState(defaultSelector);
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
          <ToolBarItem
            tool="redo"
            flip="true"
            type="redo.svg"
            tooltip="Undo"
          ></ToolBarItem>
          <ToolBarItem tool="undo" type="redo.svg" tooltip="Redo"></ToolBarItem>
          <ToolBarItem
            tool="zoomin"
            type="zoomIn.svg"
            tooltip="Zoom In"
          ></ToolBarItem>
          <ToolBarItem
            tool="zoomout"
            flip="true"
            type="zoomOut.svg"
            tooltip="Zoom Out"
          ></ToolBarItem>
          <ToolBarItem tool="move" type="hand.svg" tooltip="Move"></ToolBarItem>
          <ToolBarItem
            tool="pointer"
            type="cursor.svg"
            tooltip="Pointer"
          ></ToolBarItem>
          <Selectors>
            <SelectorItem
              selector="boundingBox"
              isSelected={boundingBoxIsSelected}
              type="bounding-box.svg"
              tooltip="Bounding Box"
            ></SelectorItem>
            <SelectorItem
              selector="polygon"
              isSelected={polygonIsSelected}
              type="polygon.svg"
              tooltip="Segmentation"
            ></SelectorItem>
            <SelectorItem
              selector="classification"
              isSelected={classificationIsSelected}
              type="pin.svg"
              tooltip="Classification"
            ></SelectorItem>
          </Selectors>
        </div>
      </CommonHeader>

      {imageFile && (
        <ReactCanvasAnnotation
          zoom={zoom}
          imageFile={imageFile}
          labels={labels}
          onChange={(data) => {
            console.log("data", data);
            dispatch(
              actions.setCanvasLabelCurds(
                imageHeightFactor *
                  data.labelRects[data.labelRects.length - 1].rect.y,
                0.9 *
                  imageWidthFactor *
                  data.labelRects[data.labelRects.length - 1].rect.x
              )
            );
            dispatch(actions.addCanvasLabel());
          }}
          annotationType={annotationType}
          isImageDrag={isImageDrag}
        />
      )}

      <CanvasLabel />

      {/*<CanvasSuggestion />*/}

      <button
        className={
          labelsIsVisible ? "toggle-labels flipHorizontal rotate90" : "toggle-labels rotate90 labelsPad  "
        }
        onClick={() => dispatch(actions.toggleMenu("labels"))}
      >
        {labelsIsVisible &&
        <span>&#9660;</span>
        }
        {!labelsIsVisible &&
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <div>&#9650;</div>
              <div style={{fontSize:"1.2em"}}>Labels</div>
            </div>

        }
      </button>
      <button
        className={
          imagesIsVisible ? "toggle-images rotate270 " : "toggle-images rotate270"
        }
        onClick={() => dispatch(actions.toggleMenu("images"))}
      >
        {imagesIsVisible &&
        <span>&#9650;</span>
        }
        {!imagesIsVisible &&
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div>&#9660;</div>
          <div style={{fontSize:"1.2em"}}>Images</div>
        </div>

        }
      </button>
    </div>
  );
};

export default Canvas;
