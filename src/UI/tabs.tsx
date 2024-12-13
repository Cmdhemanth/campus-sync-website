import React from "react";

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className="tabs" data-active={activeTab}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<TabsTriggerProps>,
            { activeTab, setActiveTab }
          );
        }
        return child;
      })}
    </div>
  );
};

interface TabsListProps {
  children: React.ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return (
    <div className="flex space-x-2 border-b border-gray-200 mb-6">
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  activeTab,
  setActiveTab,
}) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium ${
        activeTab === value
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-gray-500 hover:text-gray-700"
      }`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  activeTab?: string;
}

export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  activeTab,
}) => {
  if (activeTab !== value) return null;
  return <div>{children}</div>;
};
