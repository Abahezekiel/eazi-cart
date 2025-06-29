"use client";

export default function Search({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-[#F9FAFB] flex items-center justify-center p-6 border-[#E5E7EB] border-t border-b relative">
      <input
        placeholder="Search"
        className="border border-[#9CA3AF] rounded-3xl outline-none p-2 w-[50%] pl-4"
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANlSURBVHgBzVi9ctpAEF6JxiWdx5WVNxAeF3SWu3R2myq8gSnTIbqUdpnOrjKpEspUyLVt0CPIFXShTIYB8i3eE8dxQsKAhm9GoPvb+7R7t7d7Dm2I8/PzYDqdXjmO489mMw9VntacoD5Bfey6buf5+TmiLeAU6eT7fhWTNfF6g6dKxZHgifAx7TiOE9oQzp5I2dDu9XrhJgMyyYGYB2JdWjYbwWQjmO4e2ojwH/f7/VdtjI+/U4y7Rr8A7Z4hNsG4y6JadDKI+UKsqpGK8BeCzCMVBMQ0QLBlkBwJwThvvJNHjDWFJ4SsO3onILIJmS1afGwhgo4hhE3Z14jxzrt8z2K2EPSgwa6mRSZYWyfbXSosa2xnxBgsh+WxXKnizdblTUd55M7OzkKSxS+m3BkxkyBeR1LFlrrJ6l/hH1H5T1UJAV8g6DftAcPhcHR8fPwP832UKh/lb6j/a/ada04WqyKWbLP4iwDyb2X3M6pZ2lNmDWhBLqQSgHnaWrFp6+PIWdmVAQn82AcqCVjnf0g2oLiWSG93+RBXBayDiMrFvXqBaa/MRpejC1UA0V9UIjB3etrAar7Z7krYo/BKJWIymaQnhOUcnm+ItLLIebdLGH7UM9tdOmAcPLlEFWq12imVCIn/FBKz3dUOYuuO2ScqlYqnzZ2Y7exK0k0AXxNQiQAh3ceubEZ2wh2t3KByEagXEF3xsa4cGSqEqWIZBFQCcHQ1aBGiJbbwX+3WW1XBMT+Vg5Y2Z2TrMCcH03KINJKOAb6qSXuEyPdUmfNaW795sMmB3snJyREt1kAdAeAPDgxpx5DA9jtej4QYJ08dW9/UCbP2LPG9RzsmZuYpINbO6p+SQ6eRJb7fGUFbki7zUS45ITjPyA2C/W3XII+XlNNbmtx1G+vGFc746e0GKXx5eXmgguAoG9pp8dWEqpPrDF1u5h3K2rsSIwlOSeLhe5IOPiB5enpKPXu9XvfG4zFfjV3Qm0NfyklVLozXzxgb5hHMvQIDyZYhaGNIHsy+9I7XdobcFYKVPMFwJ49wKw9sCkxQNUxShNRXvH7iPFjPTUXu3K9KVQB35gwGg0j1KXR5qANh1QUEXksE4+lmF1fEazPms7LIjdQ6DW5Mbh/IIphr1jKQZeKDIMewETwYcgydIJ+5/wFYW/TpXDoMoAAAAABJRU5ErkJggg=="
        className="w-4 absolute right-78"
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFkSURBVHgBpdW/ToNAHAfwO64QR8Zu4ubIn8VRRyd1dJIESBjxCazvAQm+Qd9ANjeY3Tp2NCwMBPD3S0BJS487+k2a3pVfP/lxHEAJJAgCs+s6PY7jjJyRKIr0siwfNU3LGKJt2xbwu+s4Ds3zPCMLEoahUVXVF6XUBc9UoNPL4SCM33zf3xDJIFrX9ScMjd7RGXT4bdv2FczNvu5WpvMJdAcd3zOcFEWxXYKfQO/SNN2xoUgW56E4Z+NiUXwOPYJFcBEUQ8mJeJ6XwtfLXyGl76vVKhVBufAUDvmBjz6HYhgPnliWCxEUo5CZqKq66Tv9/5OibHnobMejC7U+OHQzt8+ZAGrgHE8fLmAGw+u+hLvPFVEU1zRJkieYfgx1vGcLE0WHNRW9iZgMOkQEZ7KoKM6WoCI4XYqOc3iHgvGqNE2jn4NiYLe4ZLRbYFs+4Btkb1mWDpM9oM+y6BBcFnRguMYH1i/jdovSfDk2aAAAAABJRU5ErkJggg=="
        className="w-3 ml-4 cursor-pointer "
        onClick={onClose} // Close on click
      />
    </div>
  );
}
