import React from 'react'

type Props = {
  title: string;
  children: React.ReactNode;
}

const SidebarItem = ({ title, children }: Props) => (
    <div>
      {children}
    </div>
  );

export default SidebarItem