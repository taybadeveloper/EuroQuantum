"use client";

import { useEffect, useRef, useState } from "react";
import { IconCheck, IconChevronDown, IconSearch } from "./icons";

export type Country = {
  code: string;
  name: string;
  iso: string;
  digits: number;
  placeholder?: string;
};

// Generic example number based on the country's digit count
export function makePlaceholder(digits: number): string {
  const groups: Record<number, string> = {
    4: "1234",
    5: "12345",
    6: "123 456",
    7: "123 4567",
    8: "1234 5678",
    9: "123 456 789",
    10: "123 456 7890",
    11: "123 4567 8901",
  };
  return groups[digits] ?? "123 456 789";
}

export const countries: Country[] = [
  { code: "+61", name: "Australia", iso: "au", digits: 9, placeholder: "4xx xxx xxx" },
  { code: "+93", name: "Afghanistan", iso: "af", digits: 9 },
  { code: "+355", name: "Albania", iso: "al", digits: 9 },
  { code: "+213", name: "Algeria", iso: "dz", digits: 9 },
  { code: "+1", name: "American Samoa", iso: "as", digits: 10 },
  { code: "+376", name: "Andorra", iso: "ad", digits: 6 },
  { code: "+244", name: "Angola", iso: "ao", digits: 9 },
  { code: "+1", name: "Anguilla", iso: "ai", digits: 10 },
  { code: "+1", name: "Antigua and Barbuda", iso: "ag", digits: 10 },
  { code: "+54", name: "Argentina", iso: "ar", digits: 10 },
  { code: "+374", name: "Armenia", iso: "am", digits: 8 },
  { code: "+297", name: "Aruba", iso: "aw", digits: 7 },
  { code: "+43", name: "Austria", iso: "at", digits: 10 },
  { code: "+994", name: "Azerbaijan", iso: "az", digits: 9 },
  { code: "+1", name: "Bahamas", iso: "bs", digits: 10 },
  { code: "+973", name: "Bahrain", iso: "bh", digits: 8 },
  { code: "+880", name: "Bangladesh", iso: "bd", digits: 10 },
  { code: "+1", name: "Barbados", iso: "bb", digits: 10 },
  { code: "+375", name: "Belarus", iso: "by", digits: 9 },
  { code: "+32", name: "Belgium", iso: "be", digits: 9 },
  { code: "+501", name: "Belize", iso: "bz", digits: 7 },
  { code: "+229", name: "Benin", iso: "bj", digits: 8 },
  { code: "+1", name: "Bermuda", iso: "bm", digits: 10 },
  { code: "+975", name: "Bhutan", iso: "bt", digits: 8 },
  { code: "+591", name: "Bolivia", iso: "bo", digits: 8 },
  { code: "+387", name: "Bosnia and Herzegovina", iso: "ba", digits: 8 },
  { code: "+267", name: "Botswana", iso: "bw", digits: 8 },
  { code: "+55", name: "Brazil", iso: "br", digits: 11 },
  { code: "+673", name: "Brunei", iso: "bn", digits: 7 },
  { code: "+359", name: "Bulgaria", iso: "bg", digits: 9 },
  { code: "+226", name: "Burkina Faso", iso: "bf", digits: 8 },
  { code: "+257", name: "Burundi", iso: "bi", digits: 8 },
  { code: "+855", name: "Cambodia", iso: "kh", digits: 9 },
  { code: "+237", name: "Cameroon", iso: "cm", digits: 9 },
  { code: "+1", name: "Canada", iso: "ca", digits: 10 },
  { code: "+238", name: "Cape Verde", iso: "cv", digits: 7 },
  { code: "+1", name: "Cayman Islands", iso: "ky", digits: 10 },
  { code: "+236", name: "Central African Republic", iso: "cf", digits: 8 },
  { code: "+235", name: "Chad", iso: "td", digits: 8 },
  { code: "+56", name: "Chile", iso: "cl", digits: 9 },
  { code: "+86", name: "China", iso: "cn", digits: 11 },
  { code: "+57", name: "Colombia", iso: "co", digits: 10 },
  { code: "+269", name: "Comoros", iso: "km", digits: 7 },
  { code: "+242", name: "Congo (Brazzaville)", iso: "cg", digits: 9 },
  { code: "+243", name: "Congo (Kinshasa)", iso: "cd", digits: 9 },
  { code: "+682", name: "Cook Islands", iso: "ck", digits: 5 },
  { code: "+506", name: "Costa Rica", iso: "cr", digits: 8 },
  { code: "+225", name: "Côte d'Ivoire", iso: "ci", digits: 10 },
  { code: "+385", name: "Croatia", iso: "hr", digits: 9 },
  { code: "+53", name: "Cuba", iso: "cu", digits: 8 },
  { code: "+599", name: "Curaçao", iso: "cw", digits: 7 },
  { code: "+357", name: "Cyprus", iso: "cy", digits: 8 },
  { code: "+420", name: "Czech Republic", iso: "cz", digits: 9 },
  { code: "+45", name: "Denmark", iso: "dk", digits: 8 },
  { code: "+253", name: "Djibouti", iso: "dj", digits: 8 },
  { code: "+1", name: "Dominica", iso: "dm", digits: 10 },
  { code: "+1", name: "Dominican Republic", iso: "do", digits: 10 },
  { code: "+593", name: "Ecuador", iso: "ec", digits: 9 },
  { code: "+20", name: "Egypt", iso: "eg", digits: 10 },
  { code: "+503", name: "El Salvador", iso: "sv", digits: 8 },
  { code: "+240", name: "Equatorial Guinea", iso: "gq", digits: 9 },
  { code: "+291", name: "Eritrea", iso: "er", digits: 7 },
  { code: "+372", name: "Estonia", iso: "ee", digits: 8 },
  { code: "+268", name: "Eswatini", iso: "sz", digits: 8 },
  { code: "+251", name: "Ethiopia", iso: "et", digits: 9 },
  { code: "+500", name: "Falkland Islands", iso: "fk", digits: 5 },
  { code: "+298", name: "Faroe Islands", iso: "fo", digits: 6 },
  { code: "+679", name: "Fiji", iso: "fj", digits: 7 },
  { code: "+358", name: "Finland", iso: "fi", digits: 10 },
  { code: "+33", name: "France", iso: "fr", digits: 9 },
  { code: "+594", name: "French Guiana", iso: "gf", digits: 9 },
  { code: "+689", name: "French Polynesia", iso: "pf", digits: 8 },
  { code: "+241", name: "Gabon", iso: "ga", digits: 7 },
  { code: "+220", name: "Gambia", iso: "gm", digits: 7 },
  { code: "+995", name: "Georgia", iso: "ge", digits: 9 },
  { code: "+49", name: "Germany", iso: "de", digits: 11 },
  { code: "+233", name: "Ghana", iso: "gh", digits: 9 },
  { code: "+350", name: "Gibraltar", iso: "gi", digits: 8 },
  { code: "+30", name: "Greece", iso: "gr", digits: 10 },
  { code: "+299", name: "Greenland", iso: "gl", digits: 6 },
  { code: "+1", name: "Grenada", iso: "gd", digits: 10 },
  { code: "+590", name: "Guadeloupe", iso: "gp", digits: 9 },
  { code: "+1", name: "Guam", iso: "gu", digits: 10 },
  { code: "+502", name: "Guatemala", iso: "gt", digits: 8 },
  { code: "+224", name: "Guinea", iso: "gn", digits: 9 },
  { code: "+245", name: "Guinea-Bissau", iso: "gw", digits: 9 },
  { code: "+592", name: "Guyana", iso: "gy", digits: 7 },
  { code: "+509", name: "Haiti", iso: "ht", digits: 8 },
  { code: "+504", name: "Honduras", iso: "hn", digits: 8 },
  { code: "+852", name: "Hong Kong", iso: "hk", digits: 8 },
  { code: "+36", name: "Hungary", iso: "hu", digits: 9 },
  { code: "+354", name: "Iceland", iso: "is", digits: 7 },
  { code: "+91", name: "India", iso: "in", digits: 10 },
  { code: "+62", name: "Indonesia", iso: "id", digits: 11 },
  { code: "+98", name: "Iran", iso: "ir", digits: 10 },
  { code: "+964", name: "Iraq", iso: "iq", digits: 10 },
  { code: "+353", name: "Ireland", iso: "ie", digits: 9 },
  { code: "+972", name: "Israel", iso: "il", digits: 9 },
  { code: "+39", name: "Italy", iso: "it", digits: 10 },
  { code: "+1", name: "Jamaica", iso: "jm", digits: 10 },
  { code: "+81", name: "Japan", iso: "jp", digits: 10 },
  { code: "+962", name: "Jordan", iso: "jo", digits: 9 },
  { code: "+7", name: "Kazakhstan", iso: "kz", digits: 10 },
  { code: "+254", name: "Kenya", iso: "ke", digits: 9 },
  { code: "+686", name: "Kiribati", iso: "ki", digits: 8 },
  { code: "+383", name: "Kosovo", iso: "xk", digits: 8 },
  { code: "+965", name: "Kuwait", iso: "kw", digits: 8 },
  { code: "+996", name: "Kyrgyzstan", iso: "kg", digits: 9 },
  { code: "+856", name: "Laos", iso: "la", digits: 8 },
  { code: "+371", name: "Latvia", iso: "lv", digits: 8 },
  { code: "+961", name: "Lebanon", iso: "lb", digits: 8 },
  { code: "+266", name: "Lesotho", iso: "ls", digits: 8 },
  { code: "+231", name: "Liberia", iso: "lr", digits: 8 },
  { code: "+218", name: "Libya", iso: "ly", digits: 9 },
  { code: "+423", name: "Liechtenstein", iso: "li", digits: 7 },
  { code: "+370", name: "Lithuania", iso: "lt", digits: 8 },
  { code: "+352", name: "Luxembourg", iso: "lu", digits: 9 },
  { code: "+853", name: "Macau", iso: "mo", digits: 8 },
  { code: "+261", name: "Madagascar", iso: "mg", digits: 9 },
  { code: "+265", name: "Malawi", iso: "mw", digits: 9 },
  { code: "+60", name: "Malaysia", iso: "my", digits: 10 },
  { code: "+960", name: "Maldives", iso: "mv", digits: 7 },
  { code: "+223", name: "Mali", iso: "ml", digits: 8 },
  { code: "+356", name: "Malta", iso: "mt", digits: 8 },
  { code: "+692", name: "Marshall Islands", iso: "mh", digits: 7 },
  { code: "+596", name: "Martinique", iso: "mq", digits: 9 },
  { code: "+222", name: "Mauritania", iso: "mr", digits: 8 },
  { code: "+230", name: "Mauritius", iso: "mu", digits: 8 },
  { code: "+262", name: "Mayotte", iso: "yt", digits: 9 },
  { code: "+52", name: "Mexico", iso: "mx", digits: 10 },
  { code: "+691", name: "Micronesia", iso: "fm", digits: 7 },
  { code: "+373", name: "Moldova", iso: "md", digits: 8 },
  { code: "+377", name: "Monaco", iso: "mc", digits: 8 },
  { code: "+976", name: "Mongolia", iso: "mn", digits: 8 },
  { code: "+382", name: "Montenegro", iso: "me", digits: 8 },
  { code: "+1", name: "Montserrat", iso: "ms", digits: 10 },
  { code: "+212", name: "Morocco", iso: "ma", digits: 9 },
  { code: "+258", name: "Mozambique", iso: "mz", digits: 9 },
  { code: "+95", name: "Myanmar", iso: "mm", digits: 9 },
  { code: "+264", name: "Namibia", iso: "na", digits: 9 },
  { code: "+674", name: "Nauru", iso: "nr", digits: 7 },
  { code: "+977", name: "Nepal", iso: "np", digits: 10 },
  { code: "+31", name: "Netherlands", iso: "nl", digits: 9 },
  { code: "+687", name: "New Caledonia", iso: "nc", digits: 6 },
  { code: "+64", name: "New Zealand", iso: "nz", digits: 9 },
  { code: "+505", name: "Nicaragua", iso: "ni", digits: 8 },
  { code: "+227", name: "Niger", iso: "ne", digits: 8 },
  { code: "+234", name: "Nigeria", iso: "ng", digits: 10 },
  { code: "+683", name: "Niue", iso: "nu", digits: 4 },
  { code: "+850", name: "North Korea", iso: "kp", digits: 10 },
  { code: "+389", name: "North Macedonia", iso: "mk", digits: 8 },
  { code: "+1", name: "Northern Mariana Islands", iso: "mp", digits: 10 },
  { code: "+47", name: "Norway", iso: "no", digits: 8 },
  { code: "+968", name: "Oman", iso: "om", digits: 8 },
  { code: "+92", name: "Pakistan", iso: "pk", digits: 10 },
  { code: "+680", name: "Palau", iso: "pw", digits: 7 },
  { code: "+970", name: "Palestine", iso: "ps", digits: 9 },
  { code: "+507", name: "Panama", iso: "pa", digits: 8 },
  { code: "+675", name: "Papua New Guinea", iso: "pg", digits: 8 },
  { code: "+595", name: "Paraguay", iso: "py", digits: 9 },
  { code: "+51", name: "Peru", iso: "pe", digits: 9 },
  { code: "+63", name: "Philippines", iso: "ph", digits: 10 },
  { code: "+48", name: "Poland", iso: "pl", digits: 9 },
  { code: "+351", name: "Portugal", iso: "pt", digits: 9 },
  { code: "+1", name: "Puerto Rico", iso: "pr", digits: 10 },
  { code: "+974", name: "Qatar", iso: "qa", digits: 8 },
  { code: "+262", name: "Réunion", iso: "re", digits: 9 },
  { code: "+40", name: "Romania", iso: "ro", digits: 9 },
  { code: "+7", name: "Russia", iso: "ru", digits: 10 },
  { code: "+250", name: "Rwanda", iso: "rw", digits: 9 },
  { code: "+590", name: "Saint Barthélemy", iso: "bl", digits: 9 },
  { code: "+290", name: "Saint Helena", iso: "sh", digits: 4 },
  { code: "+1", name: "Saint Kitts and Nevis", iso: "kn", digits: 10 },
  { code: "+1", name: "Saint Lucia", iso: "lc", digits: 10 },
  { code: "+590", name: "Saint Martin", iso: "mf", digits: 9 },
  { code: "+508", name: "Saint Pierre and Miquelon", iso: "pm", digits: 6 },
  { code: "+1", name: "Saint Vincent and the Grenadines", iso: "vc", digits: 10 },
  { code: "+685", name: "Samoa", iso: "ws", digits: 7 },
  { code: "+378", name: "San Marino", iso: "sm", digits: 10 },
  { code: "+239", name: "São Tomé and Príncipe", iso: "st", digits: 7 },
  { code: "+966", name: "Saudi Arabia", iso: "sa", digits: 9 },
  { code: "+221", name: "Senegal", iso: "sn", digits: 9 },
  { code: "+381", name: "Serbia", iso: "rs", digits: 9 },
  { code: "+248", name: "Seychelles", iso: "sc", digits: 7 },
  { code: "+232", name: "Sierra Leone", iso: "sl", digits: 8 },
  { code: "+65", name: "Singapore", iso: "sg", digits: 8 },
  { code: "+1", name: "Sint Maarten", iso: "sx", digits: 10 },
  { code: "+421", name: "Slovakia", iso: "sk", digits: 9 },
  { code: "+386", name: "Slovenia", iso: "si", digits: 8 },
  { code: "+677", name: "Solomon Islands", iso: "sb", digits: 7 },
  { code: "+252", name: "Somalia", iso: "so", digits: 9 },
  { code: "+27", name: "South Africa", iso: "za", digits: 9 },
  { code: "+82", name: "South Korea", iso: "kr", digits: 10 },
  { code: "+211", name: "South Sudan", iso: "ss", digits: 9 },
  { code: "+34", name: "Spain", iso: "es", digits: 9 },
  { code: "+94", name: "Sri Lanka", iso: "lk", digits: 9 },
  { code: "+249", name: "Sudan", iso: "sd", digits: 9 },
  { code: "+597", name: "Suriname", iso: "sr", digits: 7 },
  { code: "+46", name: "Sweden", iso: "se", digits: 9 },
  { code: "+41", name: "Switzerland", iso: "ch", digits: 9 },
  { code: "+963", name: "Syria", iso: "sy", digits: 9 },
  { code: "+886", name: "Taiwan", iso: "tw", digits: 9 },
  { code: "+992", name: "Tajikistan", iso: "tj", digits: 9 },
  { code: "+255", name: "Tanzania", iso: "tz", digits: 9 },
  { code: "+66", name: "Thailand", iso: "th", digits: 9 },
  { code: "+670", name: "Timor-Leste", iso: "tl", digits: 8 },
  { code: "+228", name: "Togo", iso: "tg", digits: 8 },
  { code: "+690", name: "Tokelau", iso: "tk", digits: 4 },
  { code: "+676", name: "Tonga", iso: "to", digits: 7 },
  { code: "+1", name: "Trinidad and Tobago", iso: "tt", digits: 10 },
  { code: "+216", name: "Tunisia", iso: "tn", digits: 8 },
  { code: "+90", name: "Turkey", iso: "tr", digits: 10 },
  { code: "+993", name: "Turkmenistan", iso: "tm", digits: 8 },
  { code: "+1", name: "Turks and Caicos Islands", iso: "tc", digits: 10 },
  { code: "+688", name: "Tuvalu", iso: "tv", digits: 5 },
  { code: "+256", name: "Uganda", iso: "ug", digits: 9 },
  { code: "+380", name: "Ukraine", iso: "ua", digits: 9 },
  { code: "+971", name: "United Arab Emirates", iso: "ae", digits: 9 },
  { code: "+44", name: "United Kingdom", iso: "gb", digits: 10 },
  { code: "+1", name: "United States", iso: "us", digits: 10 },
  { code: "+598", name: "Uruguay", iso: "uy", digits: 8 },
  { code: "+1", name: "US Virgin Islands", iso: "vi", digits: 10 },
  { code: "+998", name: "Uzbekistan", iso: "uz", digits: 9 },
  { code: "+678", name: "Vanuatu", iso: "vu", digits: 7 },
  { code: "+39", name: "Vatican City", iso: "va", digits: 10 },
  { code: "+58", name: "Venezuela", iso: "ve", digits: 10 },
  { code: "+84", name: "Vietnam", iso: "vn", digits: 9 },
  { code: "+681", name: "Wallis and Futuna", iso: "wf", digits: 6 },
  { code: "+967", name: "Yemen", iso: "ye", digits: 9 },
  { code: "+260", name: "Zambia", iso: "zm", digits: 9 },
  { code: "+263", name: "Zimbabwe", iso: "zw", digits: 9 },
];

function Flag({ country }: { country: Country }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${country.iso}.png`}
      srcSet={`https://flagcdn.com/w80/${country.iso}.png 2x`}
      width={24}
      height={16}
      alt={`${country.name} flag`}
      loading="lazy"
      className="h-4 w-6 shrink-0 rounded-[3px] object-cover ring-1 ring-slate-900/10"
    />
  );
}

type PhoneInputProps = {
  id?: string;
  value: string;
  country: Country;
  onCountryChange: (country: Country) => void;
  onChange: (digits: string) => void;
};

export default function PhoneInput({
  id,
  value,
  country,
  onCountryChange,
  onChange,
}: PhoneInputProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Reset search and focus it whenever the dropdown opens
  useEffect(() => {
    if (open) {
      setQuery("");
      searchRef.current?.focus();
    }
  }, [open]);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? countries.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.code.replace("+", "").includes(q) ||
          c.iso.toLowerCase().includes(q)
      )
    : countries;

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white transition focus-within:border-green-500/60 focus-within:ring-2 focus-within:ring-green-500/20">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={`Country code ${country.code}`}
          className="flex shrink-0 items-center gap-1.5 border-r border-slate-200 px-3.5 py-3 text-sm text-slate-700 transition-colors hover:bg-stone-50"
        >
          <Flag country={country} />
          <span className="font-medium tabular-nums">{country.code}</span>
          <IconChevronDown
            className={`h-3.5 w-3.5 text-slate-500 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <input
          id={id}
          type="tel"
          inputMode="tel"
          placeholder={country.placeholder ?? makePlaceholder(country.digits)}
          value={value}
          maxLength={country.digits}
          onChange={(e) => onChange(e.target.value.replace(/[^\d\s-]/g, ""))}
          className="w-full bg-transparent px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 outline-none"
        />
      </div>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 top-full z-20 mt-2 max-h-72 w-72 max-w-[calc(100vw-3rem)] overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl"
        >
          <div className="sticky top-0 z-10 border-b border-slate-100 bg-white p-2">
            <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
              <IconSearch className="h-4 w-4 shrink-0 text-slate-500" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search country or code..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-500 outline-none"
              />
            </div>
          </div>

          <div className="p-1.5">
            {filtered.length === 0 ? (
              <p className="px-3 py-6 text-center text-sm text-slate-500">
                No country found
              </p>
            ) : (
              filtered.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  role="option"
                  aria-selected={c.name === country.name}
                  onClick={() => {
                    onCountryChange(c);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                    c.name === country.name ? "bg-stone-50" : "hover:bg-slate-50"
                  }`}
                >
                  <Flag country={c} />
                  <span className="flex-1 text-slate-700">{c.name}</span>
                  <span className="tabular-nums text-slate-500">{c.code}</span>
                  {c.name === country.name && (
                    <IconCheck className="h-3.5 w-3.5 shrink-0 text-green-600" />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
