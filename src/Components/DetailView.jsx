import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/Components/ui/alert-dialog"
import React from 'react'
import { string } from "zod"

/**
 * A reusable detail view dialog.
 * @param {object} props
 * @param {boolean} props.open - Whether the dialog is open.
 * @param {function} props.onOpenChange - Function to call when the open state changes.
 * @param {string} props.title - The title for the dialog header.
 * @param {React.ReactNode} props.children - The content to display inside the dialog body.
 * @param {string} [props.actionText="Confirm"] - Text for the action button.
 * @param {function} [props.onActionClick] - Function to call when the action button is clicked.
 * @param {string} [props.cancelText="Cancel"] - Text for the cancel button.
 * @param {string} [props.actionClassName] - Optional class for the action button.
 * @param {string} [props.cancelClassName]
 * @param {string} [props.actionTextOther]
 * @param {function} [props.onActionClickOthere]
 * @param {string} [props.actionClassNameOther]
 * @param {boolean}[props.otherAlters]
 */
const DetailView = ({
  open,
  onOpenChange,
  title,
  children,
  actionText = "Confirm",
  onActionClick,
  cancelText = "Cancel",
  actionClassName,
  cancelClassName,
  actionClassNameOther,
  onActionClickOthere,
  actionTextOther,
  otherAlters = false
}) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-lg">
        <AlertDialogHeader>

          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription asChild>
           
            <div className="text-sm mt-3">
              {children}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
         
          <AlertDialogAction
            onClick={onActionClick}
            className={actionClassName} 
          >
            {actionText}
          </AlertDialogAction>
          {otherAlters && <AlertDialogAction
          onClick={onActionClickOthere}
          className={actionClassNameOther}
          >
            {actionTextOther}
          </AlertDialogAction>
          }
          <AlertDialogCancel className={cancelClassName}>
            {cancelText}
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DetailView