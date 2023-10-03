import {
  VividSidebarTab,
  VividInbox,
  VividContent,
  type SidebarTabProps,
} from "./SidebarTab.cva";

export const SidebarTab = (props: SidebarTabProps) => {
  return (
    <div className={VividSidebarTab({ status: props.status })}>
      <div className={VividContent({ status: props.status })}>
        {props.icon}
        <div className={VividInbox({ status: props.status })}>
          {props.label}
        </div>
      </div>
    </div>
  );
};
