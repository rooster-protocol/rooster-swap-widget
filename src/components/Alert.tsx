import { forwardRef } from "react";
import {
  CancelOutlined,
  CheckCircleOutline,
  Close,
  ErrorOutline,
} from "@mui/icons-material";
import { IconButton, SnackbarContent } from "@mui/material";
import { closeSnackbar } from "notistack";
import { noop } from "lodash";

interface AlertProp {
  message: string;
  onClose?: () => void;
  type: string;
  title: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProp>(function Alert(
  { message, title, onClose = noop, type }: AlertProp,
  ref
) {
  let color = "";

  if (type == "success") {
    color = "#48B16E";
  } else if (type == "warning") {
    color = "#DCA048";
  } else if (type == "error") {
    color = "#FB3836";
  }

  return (
    <div ref={ref}>
      <SnackbarContent
        sx={{
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #030517",
          color: "#FFFFFF",
          padding: "12px 20px",
          width: "474px",
          maxWidth: "100%",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
        }}
        message={
          <div
            id="client-snackbar"
            style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "20px", color: color }}>
              <div
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "20px",
                }}>
                {type == "success" && <CheckCircleOutline />}
                {type == "warning" && <ErrorOutline />}
                {type == "error" && <CancelOutlined />}
              </div>
            </div>
            <div style={{ marginRight: "30px", marginLeft: "10px" }}>
              <h3 style={{ marginTop: 0, marginBottom: "5px" }}> {title} </h3>
              {message}
            </div>
          </div>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            sx={{
              position: "absolute",
              right: "5px",
              top: "10px",
            }}
            onClick={() => {
              closeSnackbar();
              onClose();
            }}>
            <Close />
          </IconButton>,
        ]}
      />
    </div>
  );
});

export default Alert;
