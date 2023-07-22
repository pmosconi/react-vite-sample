import StatusIndicator from "@cloudscape-design/components/status-indicator";

export const InStock = () => <StatusIndicator>Available</StatusIndicator>;
export const OutOfStock = () => <StatusIndicator type="error">Unavailable</StatusIndicator>;