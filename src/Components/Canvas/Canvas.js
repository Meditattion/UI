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
  labelRects: [{id:"333",rect:{height: 84.29882044560944,width: 187.4705111402359,x: 53.40323711910222,y: 65.4259501965924}}],
  labelPolygons: [{id:"222",
                        vertices:[{'x': 318.0, 'y': 115.99803921568628}, {'x': 317.9980392156863, 'y': 89.0}, {'x': 311.9980392156863, 'y': 81.0}, {'x': 310.9980392156863, 'y': 75.0}, {'x': 292.9980392156863, 'y': 51.0}, {'x': 283.9980392156863, 'y': 43.0}, {'x': 279.0, 'y': 35.001960784313724}, {'x': 267.0, 'y': 28.001960784313727}, {'x': 255.0, 'y': 18.001960784313727}, {'x': 247.0, 'y': 17.001960784313727}, {'x': 238.0, 'y': 20.001960784313727}, {'x': 234.00196078431372, 'y': 24.0}, {'x': 229.00196078431372, 'y': 35.0}, {'x': 225.00196078431372, 'y': 62.0}, {'x': 229.00196078431372, 'y': 79.0}, {'x': 236.00196078431372, 'y': 95.0}, {'x': 249.0, 'y': 108.99803921568628}, {'x': 257.0, 'y': 114.99803921568628}, {'x': 259.0, 'y': 114.99803921568628}, {'x': 260.0, 'y': 116.99803921568628}, {'x': 292.0, 'y': 131.99803921568628}, {'x': 293.0, 'y': 133.99803921568628}, {'x': 312.0, 'y': 141.99803921568628}, {'x': 316.0, 'y': 141.99803921568628}, {'x': 317.9980392156863, 'y': 140.0}, {'x': 318.0, 'y': 115.99803921568628}]
      }],
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
    // const [annotationType, setAnnotationType] = useState(LABEL_TYPE.RECTANGLE);
    const [annotationType, setAnnotationType] = useState(LABEL_TYPE.POLYGON);
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
              // dispatch(actions.setCanvasLabelCurds(data.labelRects[data.labelRects.length-1].rect.x,
              //     data.labelRects[data.labelRects.length-1].rect.y));
              // dispatch(actions.addCanvasLabel());
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
