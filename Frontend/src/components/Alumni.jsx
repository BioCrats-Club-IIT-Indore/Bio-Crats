import React from 'react';

const AlumniDirectory = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-10 py-4">
          <div className="flex items-center gap-3 text-slate-900">
            <svg className="size-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-[-0.015em]">Biocrats Club</h2>
          </div>
          <div className="flex flex-1 justify-end gap-4">
            <nav className="flex items-center gap-6">
              <a className="text-slate-600 hover:text-[var(--primary-color)] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-slate-600 hover:text-[var(--primary-color)] text-sm font-medium leading-normal" href="#">Events</a>
              <a className="text-slate-600 hover:text-[var(--primary-color)] text-sm font-medium leading-normal" href="#">Projects</a>
              <a className="text-slate-600 hover:text-[var(--primary-color)] text-sm font-medium leading-normal" href="#">Team</a>
              <a className="text-[var(--primary-color)] text-sm font-semibold leading-normal" href="#">Alumni</a>
              <a className="text-slate-600 hover:text-[var(--primary-color)] text-sm font-medium leading-normal" href="#">Contact</a>
            </nav>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-[var(--primary-color)] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600">
              <span className="truncate">Login</span>
            </button>
          </div>
        </header>
        <main className="px-40 flex flex-1 justify-center py-16">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col items-center gap-4 text-center p-4">
              <h1 className="text-slate-900 text-5xl font-bold leading-tight tracking-tighter">Alumni Directory</h1>
              <p className="text-slate-500 text-lg font-normal leading-normal max-w-2xl">Connect with our distinguished alumni network and explore their achievements.</p>
            </div>
            <div className="px-4 py-8">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-md h-full">
                  <div className="text-slate-500 flex border border-solid border-slate-300 items-center justify-center pl-4 rounded-l-md border-r-0">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] border border-solid border-slate-300 h-full placeholder:text-slate-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    placeholder="Search alumni by name or profession"
                  />
                </div>
              </label>
            </div>
            <h2 className="text-slate-900 text-3xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Notable Alumni</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">

              {/* Alumni Card 1 */}
              <div className="flex flex-col gap-4 rounded-md border border-solid border-slate-200 p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div
                    className="w-20 h-20 bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbm0jxNqa-RjlqhgNFxDlV2kCT7-wTCema9YtZ35lM-MVo7da-OutSzauxr-L1thgwEf7j8ywXuMlbayEjpdfzHaW3q8YKE8sbwKkpOSGPXS0a3ewX5cigyNXrfbM5cso2Hf3qRwGVHoVMHLlW3Revs4b94OBlElQ7gXMLuvebXaa-b55MwYbKFTaYtGcflo3Ts1wGWqHIHXzKshizpJhqTy6W_PyBsuG94dronL2XAhKK0QsnN_P3yyBPLOAOeY078YzbiCWhpqZ1")' }}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-900 text-lg font-bold leading-tight">Dr. Anya Sharma</p>
                    <p className="text-slate-500 text-sm font-normal leading-normal">Class of 2018</p>
                  </div>
                </div>
                <p className="text-slate-600 text-base font-normal leading-normal">
                  Currently a Research Scientist at a leading biotechnology firm, Dr. Sharma has made significant contributions to cancer research.
                </p>
              </div>
              {/* Alumni Card 2 */}
              <div className="flex flex-col gap-4 rounded-md border border-solid border-slate-200 p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div
                    className="w-20 h-20 bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuxPRLU4gzwAg9zvjs88ljjcRPZEXbWjmZ_kxlbWKw1OE3zN3B-9KNMBPOBfgVOnr1p0uwbXHleP0LHNWtlR5SuJub7bsZG7r8dGA-r3UhFmMacWxN3STu9zx7L2Unf8jvYnIIxr-77cCVO2mrXI5p6_vnwSmyd_HmPB-rxqvK4FFNeGquK6HFBNCQems5TsnUwMQKbLzRMCD4drSwu3IVr0gv5zouxsgfn8dw4m8lfqUdc3ldUvafcFppqiVq3WLySSmRKYLXN35A")' }}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-900 text-lg font-bold leading-tight">Mr. Rohan Verma</p>
                    <p className="text-slate-500 text-sm font-normal leading-normal">Class of 2015</p>
                  </div>
                </div>
                <p className="text-slate-600 text-base font-normal leading-normal">
                  Mr. Verma is the CEO of a successful pharmaceutical startup, focusing on innovative drug delivery systems.
                </p>
              </div>
              {/* Alumni Card 3 */}
              <div className="flex flex-col gap-4 rounded-md border border-solid border-slate-200 p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div
                    className="w-20 h-20 bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1yfb4gQ7aY6TDF3ILidVA0oPzbOjwDwWL4uUcTnw1hm1LEN-ER3mL1Xd9PSH-1nk-S6uWORKV0jmGToEBTgCJBF172OIqUUa_F1cN58W-Jy6RwN342n2ispng6RBMHhChOHoXAzoT2x4M0bW0q6oZOVnZHmLJIeiVYOEgnP1MjtNUgr8TtIojpFv2l-mO_NVSSYmYyblIelPcH7DZK3Ve8GCJSyqzlMN-VsRiCd8guVfPyamk_LHUSVE_lO7ccVIwsNV5chASBGCQ")' }}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-900 text-lg font-bold leading-tight">Ms. Priya Kapoor</p>
                    <p className="text-slate-500 text-sm font-normal leading-normal">Class of 2012</p>
                  </div>
                </div>
                <p className="text-slate-600 text-base font-normal leading-normal">
                  Ms. Kapoor is a renowned professor in molecular biology at a prestigious university, known for her work in genetic engineering.
                </p>
              </div>
              {/* Alumni Card 4 */}
              <div className="flex flex-col gap-4 rounded-md border border-solid border-slate-200 p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div
                    className="w-20 h-20 bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVcdfP3SLajfdu_fW1vfoJPWDU0gVOgC4_3xOQ93YL383XW9pBGkAs5V4581V0do5uwJJwLpz__rdVsiyHuqHCCq2cWhHdtd_FvViPTXufKy_dzMzOzEROOd0ybj9sFiqiwCLngTesQcUS7SFeFt2X3A-N9LOE5JnOdbBA92m3EuCdpUssr8pks6h1j8z4ylSTi_q61QR-3ydutXghrpfoJtfAw4CQlRVqdDVu94aOwy8PEKLGaZAiS9_De18ZwDqCNemEzsaTDrxK")' }}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-900 text-lg font-bold leading-tight">Mr. Vikram Singh</p>
                    <p className="text-slate-500 text-sm font-normal leading-normal">Class of 2010</p>
                  </div>
                </div>
                <p className="text-slate-600 text-base font-normal leading-normal">
                  Mr. Singh is a senior consultant in the healthcare industry, specializing in regulatory affairs and market access.
                </p>
              </div>
              {/* Alumni Card 5 */}
              <div className="flex flex-col gap-4 rounded-md border border-solid border-slate-200 p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div
                    className="w-20 h-20 bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSPaKKv1U951E0SuqWvKuHb2Wub9GA9HwlyfUdAYqprSxdXhEWE-swlgybmfZAKWaSHwbw1aBDcGKZO-9AbLjpwUzFVDK7MuPClVbO5WyjIsjte-N0CZlTmhVrMQSrHdbiW8sdUA0gIVz-DOsT5zdcdzp7ulHw34z1dPj2TXTfem3Hii4PCsecGffUUFU0qgBaOiZgLBckPaody1RE2Pmew6MsYN8XbTYJRUaA2P0bRcoTyItk_lhsEbFv7OK941MAvA1mAUwmrGd3")' }}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-900 text-lg font-bold leading-tight">Dr. Neha Patel</p>
                    <p className="text-slate-500 text-sm font-normal leading-normal">Class of 2008</p>
                  </div>
                </div>
                <p className="text-slate-600 text-base font-normal leading-normal">
                  Dr. Patel is a leading expert in bioinformatics, developing cutting-edge tools for genomic data analysis.
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex justify-center border-t border-solid border-slate-200">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-8 px-5 py-12 @container">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 @[480px]:flex-row @[480px]:justify-between">
                <div className="flex items-center gap-3 text-slate-900">
                  <svg className="size-7 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                  <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em]">Biocrats Club</h2>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                  <a className="text-slate-600 hover:text-[var(--primary-color)] text-base font-normal leading-normal" href="#">About Us</a>
                  <a className="text-slate-600 hover:text-[var(--primary-color)] text-base font-normal leading-normal" href="#">Contact</a>
                  <a className="text-slate-600 hover:text-[var(--primary-color)] text-base font-normal leading-normal" href="#">Privacy Policy</a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-slate-500 text-sm font-normal leading-normal">@2024 Biocrats Club. All rights reserved.</p>
                <div className="flex items-center gap-4">
                  {/* Add icons here as in the original HTML, or import as needed for interactivity */}
                </div>
              </div>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AlumniDirectory;
