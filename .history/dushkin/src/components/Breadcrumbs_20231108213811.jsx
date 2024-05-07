import React from "react";

function Breadcrumbs({ Breadcrumbs, productHref, productName }) {
  if (!Breadcrumbs || Breadcrumbs.length === 0) {
    return null; // Return null if Breadcrumbs are not available
  }

  return (
    <nav aria-label="Breadcrumbs">
      <ol className="flex items-center space-x-2">
        {Breadcrumbs.map((Breadcrumbs) => (
          <li key={Breadcrumbs.id}>
            <div className="flex items-center">
              <a href={Breadcrumbs.href} className="mr-2 text-gray-900">
                {Breadcrumbs.name}
              </a>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
        ))}
        <li>
          <a href={productHref} className="text-gray-500 hover:text-gray-600">
            {productName}
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
