import * as d3 from "d3"
import { useEffect, useState } from "react"
import "./graph.css"
import { sliderBottom } from 'd3-simple-slider'

export default function Graph({
    width = 80,
    height = 50,
    marginX = 10,
    marginY = 10,
}) {
    //using d3 for the first time, might be good to optimize
    //data from https://ourworldindata.org/grapher/annual-co2-emissions-per-country
    //converted from csv to js array

    const temp = [
        { year: 1851, value: 0.0018314128 },
        { year: 1852, value: 0.0036884283 },
        { year: 1853, value: 0.0055778543 },
        { year: 1854, value: 0.0075114216 },
        { year: 1855, value: 0.009451285 },
        { year: 1856, value: 0.011404636 },
        { year: 1857, value: 0.013375946 },
        { year: 1858, value: 0.015355136 },
        { year: 1859, value: 0.017368155 },
        { year: 1860, value: 0.01933133 },
        { year: 1861, value: 0.021259334 },
        { year: 1862, value: 0.023178479 },
        { year: 1863, value: 0.025112143 },
        { year: 1864, value: 0.027054338 },
        { year: 1865, value: 0.02899049 },
        { year: 1866, value: 0.030950887 },
        { year: 1867, value: 0.032930553 },
        { year: 1868, value: 0.034906715 },
        { year: 1869, value: 0.03689542 },
        { year: 1870, value: 0.038989626 },
        { year: 1871, value: 0.041164286 },
        { year: 1872, value: 0.0434164 },
        { year: 1873, value: 0.045736518 },
        { year: 1874, value: 0.048053976 },
        { year: 1875, value: 0.050430708 },
        { year: 1876, value: 0.052835703 },
        { year: 1877, value: 0.0552899 },
        { year: 1878, value: 0.05778677 },
        { year: 1879, value: 0.06033757 },
        { year: 1880, value: 0.06297748 },
        { year: 1881, value: 0.065636106 },
        { year: 1882, value: 0.068372294 },
        { year: 1883, value: 0.071186505 },
        { year: 1884, value: 0.07401393 },
        { year: 1885, value: 0.07684813 },
        { year: 1886, value: 0.07971877 },
        { year: 1887, value: 0.0826616 },
        { year: 1888, value: 0.08569946 },
        { year: 1889, value: 0.08874032 },
        { year: 1890, value: 0.09199192 },
        { year: 1891, value: 0.0953336 },
        { year: 1892, value: 0.09869133 },
        { year: 1893, value: 0.10206372 },
        { year: 1894, value: 0.10550645 },
        { year: 1895, value: 0.10902286 },
        { year: 1896, value: 0.11259529 },
        { year: 1897, value: 0.11623 },
        { year: 1898, value: 0.11994625 },
        { year: 1899, value: 0.123795874 },
        { year: 1900, value: 0.12773943 },
        { year: 1901, value: 0.13174058 },
        { year: 1902, value: 0.13579857 },
        { year: 1903, value: 0.13998029 },
        { year: 1904, value: 0.14422375 },
        { year: 1905, value: 0.14857244 },
        { year: 1906, value: 0.15302485 },
        { year: 1907, value: 0.15772648 },
        { year: 1908, value: 0.16234927 },
        { year: 1909, value: 0.16708013 },
        { year: 1910, value: 0.1718384 },
        { year: 1911, value: 0.17661344 },
        { year: 1912, value: 0.18146127 },
        { year: 1913, value: 0.18650202 },
        { year: 1914, value: 0.19130865 },
        { year: 1915, value: 0.19605435 },
        { year: 1916, value: 0.20095135 },
        { year: 1917, value: 0.20594001 },
        { year: 1918, value: 0.21086405 },
        { year: 1919, value: 0.21543984 },
        { year: 1920, value: 0.22041166 },
        { year: 1921, value: 0.22511943 },
        { year: 1922, value: 0.22999354 },
        { year: 1923, value: 0.23516008 },
        { year: 1924, value: 0.24037065 },
        { year: 1925, value: 0.24563053 },
        { year: 1926, value: 0.25080988 },
        { year: 1927, value: 0.25619805 },
        { year: 1928, value: 0.26161817 },
        { year: 1929, value: 0.26724157 },
        { year: 1930, value: 0.2727015 },
        { year: 1931, value: 0.27793375 },
        { year: 1932, value: 0.2829807 },
        { year: 1933, value: 0.2881221 },
        { year: 1934, value: 0.2936023 },
        { year: 1935, value: 0.2992494 },
        { year: 1936, value: 0.30515504 },
        { year: 1937, value: 0.3112529 },
        { year: 1938, value: 0.31727418 },
        { year: 1939, value: 0.32358527 },
        { year: 1940, value: 0.33015275 },
        { year: 1941, value: 0.33704424 },
        { year: 1942, value: 0.34394217 },
        { year: 1943, value: 0.35087314 },
        { year: 1944, value: 0.35790756 },
        { year: 1945, value: 0.3644617 },
        { year: 1946, value: 0.37140456 },
        { year: 1947, value: 0.37867865 },
        { year: 1948, value: 0.38615373 },
        { year: 1949, value: 0.39350387 },
        { year: 1950, value: 0.40167087 },
        { year: 1951, value: 0.4103632 },
        { year: 1952, value: 0.41935006 },
        { year: 1953, value: 0.42859462 },
        { year: 1954, value: 0.43808112 },
        { year: 1955, value: 0.4482803 },
        { year: 1956, value: 0.4589317 },
        { year: 1957, value: 0.46995032 },
        { year: 1958, value: 0.48138395 },
        { year: 1959, value: 0.49352536 },
        { year: 1960, value: 0.5056624 },
        { year: 1961, value: 0.5177196 },
        { year: 1962, value: 0.5298462 },
        { year: 1963, value: 0.54229563 },
        { year: 1964, value: 0.5550955 },
        { year: 1965, value: 0.5682767 },
        { year: 1966, value: 0.58189815 },
        { year: 1967, value: 0.59571266 },
        { year: 1968, value: 0.60998076 },
        { year: 1969, value: 0.62480897 },
        { year: 1970, value: 0.64041144 },
        { year: 1971, value: 0.65593904 },
        { year: 1972, value: 0.67191297 },
        { year: 1973, value: 0.68837404 },
        { year: 1974, value: 0.7046171 },
        { year: 1975, value: 0.72076964 },
        { year: 1976, value: 0.7372944 },
        { year: 1977, value: 0.75398517 },
        { year: 1978, value: 0.7707776 },
        { year: 1979, value: 0.7876942 },
        { year: 1980, value: 0.8042903 },
        { year: 1981, value: 0.820348 },
        { year: 1982, value: 0.8363935 },
        { year: 1983, value: 0.8524997 },
        { year: 1984, value: 0.8692645 },
        { year: 1985, value: 0.88604414 },
        { year: 1986, value: 0.90283 },
        { year: 1987, value: 0.9197935 },
        { year: 1988, value: 0.9370849 },
        { year: 1989, value: 0.95446503 },
        { year: 1990, value: 0.9717413 },
        { year: 1991, value: 0.98903286 },
        { year: 1992, value: 1.0058793 },
        { year: 1993, value: 1.0225055 },
        { year: 1994, value: 1.0396204 },
        { year: 1995, value: 1.0569528 },
        { year: 1996, value: 1.0747546 },
        { year: 1997, value: 1.0930924 },
        { year: 1998, value: 1.1105824 },
        { year: 1999, value: 1.1279652 },
        { year: 2000, value: 1.145743 },
        { year: 2001, value: 1.1637536 },
        { year: 2002, value: 1.1819981 },
        { year: 2003, value: 1.2015043 },
        { year: 2004, value: 1.2214278 },
        { year: 2005, value: 1.2416629 },
        { year: 2006, value: 1.2626654 },
        { year: 2007, value: 1.2837812 },
        { year: 2008, value: 1.3051788 },
        { year: 2009, value: 1.3261223 },
        { year: 2010, value: 1.3481517 },
        { year: 2011, value: 1.3713498 },
        { year: 2012, value: 1.3950663 },
        { year: 2013, value: 1.4185915 },
        { year: 2014, value: 1.4424351 },
        { year: 2015, value: 1.466253 },
        { year: 2016, value: 1.489489 },
        { year: 2017, value: 1.5132885 },
        { year: 2018, value: 1.5377011 },
        { year: 2019, value: 1.562421 },
        { year: 2020, value: 1.5857543 },
        { year: 2021, value: 1.6102432 },
        { year: 2022, value: 1.6352426 }]

    const data = [
        { year: 1750, value: 9305937 },
        { year: 1751, value: 9407229 },
        { year: 1752, value: 9505168 },
        { year: 1753, value: 9610490 },
        { year: 1754, value: 9733580 },
        { year: 1755, value: 9793468 },
        { year: 1756, value: 9909914 },
        { year: 1757, value: 10093936 },
        { year: 1758, value: 10216358 },
        { year: 1759, value: 10338854 },
        { year: 1760, value: 10514331 },
        { year: 1761, value: 10747885 },
        { year: 1762, value: 10952198 },
        { year: 1763, value: 11191592 },
        { year: 1764, value: 11396982 },
        { year: 1765, value: 11643486 },
        { year: 1766, value: 11876080 },
        { year: 1767, value: 12152509 },
        { year: 1768, value: 12466936 },
        { year: 1769, value: 12780074 },
        { year: 1770, value: 13097216 },
        { year: 1771, value: 13369488 },
        { year: 1772, value: 13623507 },
        { year: 1773, value: 13808138 },
        { year: 1774, value: 14012415 },
        { year: 1775, value: 14338920 },
        { year: 1776, value: 14654124 },
        { year: 1777, value: 14959537 },
        { year: 1778, value: 15243483 },
        { year: 1779, value: 15535235 },
        { year: 1780, value: 15878726 },
        { year: 1781, value: 16234383 },
        { year: 1782, value: 16580954 },
        { year: 1783, value: 17062752 },
        { year: 1784, value: 17471092 },
        { year: 1785, value: 17965128 },
        { year: 1786, value: 18447496 },
        { year: 1787, value: 18859130 },
        { year: 1788, value: 19286228 },
        { year: 1789, value: 19863424 },
        { year: 1790, value: 20398094 },
        { year: 1791, value: 20931750 },
        { year: 1792, value: 21929214 },
        { year: 1793, value: 22297260 },
        { year: 1794, value: 22519656 },
        { year: 1795, value: 22315246 },
        { year: 1796, value: 22121374 },
        { year: 1797, value: 22090078 },
        { year: 1798, value: 23105928 },
        { year: 1799, value: 27485206 },
        { year: 1800, value: 32798352 },
        { year: 1801, value: 31986050 },
        { year: 1802, value: 40310476 },
        { year: 1803, value: 29538506 },
        { year: 1804, value: 31769176 },
        { year: 1805, value: 31251818 },
        { year: 1806, value: 32704620 },
        { year: 1807, value: 36200652 },
        { year: 1808, value: 35497788 },
        { year: 1809, value: 36333812 },
        { year: 1810, value: 39492310 },
        { year: 1811, value: 40176680 },
        { year: 1812, value: 40814520 },
        { year: 1813, value: 41206140 },
        { year: 1814, value: 42226650 },
        { year: 1815, value: 43587264 },
        { year: 1816, value: 45496580 },
        { year: 1817, value: 49275920 },
        { year: 1818, value: 51392010 },
        { year: 1819, value: 50930170 },
        { year: 1820, value: 50733076 },
        { year: 1821, value: 52059348 },
        { year: 1822, value: 54021710 },
        { year: 1823, value: 56357760 },
        { year: 1824, value: 57583636 },
        { year: 1825, value: 60730864 },
        { year: 1826, value: 61382130 },
        { year: 1827, value: 65738572 },
        { year: 1828, value: 66681790 },
        { year: 1829, value: 66307412 },
        { year: 1830, value: 88988260 },
        { year: 1831, value: 83250616 },
        { year: 1832, value: 82091560 },
        { year: 1833, value: 83248700 },
        { year: 1834, value: 88763100 },
        { year: 1835, value: 97399600 },
        { year: 1836, value: 106894500 },
        { year: 1837, value: 106199420 },
        { year: 1838, value: 105845260 },
        { year: 1839, value: 109653030 },
        { year: 1840, value: 118808510 },
        { year: 1841, value: 122165550 },
        { year: 1842, value: 129388790 },
        { year: 1843, value: 132369384 },
        { year: 1844, value: 141942270 },
        { year: 1845, value: 155037360 },
        { year: 1846, value: 157656130 },
        { year: 1847, value: 170740910 },
        { year: 1848, value: 173579870 },
        { year: 1849, value: 184931980 },
        { year: 1850, value: 196751970 },
        { year: 1851, value: 198668110 },
        { year: 1852, value: 207414200 },
        { year: 1853, value: 217120430 },
        { year: 1854, value: 255033170 },
        { year: 1855, value: 260104400 },
        { year: 1856, value: 277296450 },
        { year: 1857, value: 279932000 },
        { year: 1858, value: 284225150 },
        { year: 1859, value: 301481250 },
        { year: 1860, value: 330962600 },
        { year: 1861, value: 347785820 },
        { year: 1862, value: 354488900 },
        { year: 1863, value: 378180160 },
        { year: 1864, value: 407725980 },
        { year: 1865, value: 432859140 },
        { year: 1866, value: 446553600 },
        { year: 1867, value: 478160740 },
        { year: 1868, value: 491551940 },
        { year: 1869, value: 521954200 },
        { year: 1870, value: 533338270 },
        { year: 1871, value: 566891300 },
        { year: 1872, value: 627301250 },
        { year: 1873, value: 666481200 },
        { year: 1874, value: 624232500 },
        { year: 1875, value: 677113860 },
        { year: 1876, value: 686780200 },
        { year: 1877, value: 700404400 },
        { year: 1878, value: 705973570 },
        { year: 1879, value: 755990460 },
        { year: 1880, value: 853916350 },
        { year: 1881, value: 883544060 },
        { year: 1882, value: 933360100 },
        { year: 1883, value: 992753600 },
        { year: 1884, value: 1004134100 },
        { year: 1885, value: 1011637100 },
        { year: 1886, value: 1027417500 },
        { year: 1887, value: 1078746900 },
        { year: 1888, value: 1194352600 },
        { year: 1889, value: 1194624000 },
        { year: 1890, value: 1300362400 },
        { year: 1891, value: 1361750100 },
        { year: 1892, value: 1372396500 },
        { year: 1893, value: 1355477200 },
        { year: 1894, value: 1403019100 },
        { year: 1895, value: 1487432300 },
        { year: 1896, value: 1536365600 },
        { year: 1897, value: 1609231600 },
        { year: 1898, value: 1697166300 },
        { year: 1899, value: 1853709200 },
        { year: 1900, value: 1952209500 },
        { year: 1901, value: 2016744400 },
        { year: 1902, value: 2067683800 },
        { year: 1903, value: 2254100200 },
        { year: 1904, value: 2279747300 },
        { year: 1905, value: 2427318300 },
        { year: 1906, value: 2534733000 },
        { year: 1907, value: 2888318000 },
        { year: 1908, value: 2776440800 },
        { year: 1909, value: 2890495000 },
        { year: 1910, value: 3034089700 },
        { year: 1911, value: 3079502000 },
        { year: 1912, value: 3235963600 },
        { year: 1913, value: 3506275800 },
        { year: 1914, value: 3180355600 },
        { year: 1915, value: 3134854000 },
        { year: 1916, value: 3385858300 },
        { year: 1917, value: 3540426800 },
        { year: 1918, value: 3493264100 },
        { year: 1919, value: 3029006600 },
        { year: 1920, value: 3521427500 },
        { year: 1921, value: 3090096600 },
        { year: 1922, value: 3240313900 },
        { year: 1923, value: 3676233200 },
        { year: 1924, value: 3687220200 },
        { year: 1925, value: 3727033600 },
        { year: 1926, value: 3661030400 },
        { year: 1927, value: 3996128800 },
        { year: 1928, value: 3978763300 },
        { year: 1929, value: 4270907600 },
        { year: 1930, value: 3938598400 },
        { year: 1931, value: 3519903200 },
        { year: 1932, value: 3173476400 },
        { year: 1933, value: 3341518300 },
        { year: 1934, value: 3634241800 },
        { year: 1935, value: 3814798300 },
        { year: 1936, value: 4185513700 },
        { year: 1937, value: 4474233000 },
        { year: 1938, value: 4206901000 },
        { year: 1939, value: 4451247000 },
        { year: 1940, value: 4861346000 },
        { year: 1941, value: 4970814500 },
        { year: 1942, value: 4959586000 },
        { year: 1943, value: 5041694000 },
        { year: 1944, value: 5117908500 },
        { year: 1945, value: 4257136000 },
        { year: 1946, value: 4646123500 },
        { year: 1947, value: 5145782000 },
        { year: 1948, value: 5424953000 },
        { year: 1949, value: 5181006000 },
        { year: 1950, value: 5929342000 },
        { year: 1951, value: 6381405700 },
        { year: 1952, value: 6467437000 },
        { year: 1953, value: 6650861600 },
        { year: 1954, value: 6789497300 },
        { year: 1955, value: 7443861000 },
        { year: 1956, value: 7925980700 },
        { year: 1957, value: 8185614000 },
        { year: 1958, value: 8417160000 },
        { year: 1959, value: 8854662000 },
        { year: 1960, value: 9386421000 },
        { year: 1961, value: 9414383000 },
        { year: 1962, value: 9746556000 },
        { year: 1963, value: 10266046000 },
        { year: 1964, value: 10823619000 },
        { year: 1965, value: 11309690000 },
        { year: 1966, value: 11861708000 },
        { year: 1967, value: 12236328000 },
        { year: 1968, value: 12904336000 },
        { year: 1969, value: 13760840000 },
        { year: 1970, value: 14898157000 },
        { year: 1971, value: 15502787000 },
        { year: 1972, value: 16223440000 },
        { year: 1973, value: 17083500000 },
        { year: 1974, value: 17009382000 },
        { year: 1975, value: 17049979000 },
        { year: 1976, value: 17985243000 },
        { year: 1977, value: 18494652000 },
        { year: 1978, value: 19063955000 },
        { year: 1979, value: 19603001000 },
        { year: 1980, value: 19482442000 },
        { year: 1981, value: 19016950000 },
        { year: 1982, value: 18865373000 },
        { year: 1983, value: 18985900000 },
        { year: 1984, value: 19641730000 },
        { year: 1985, value: 20305132000 },
        { year: 1986, value: 20607515000 },
        { year: 1987, value: 21245784000 },
        { year: 1988, value: 22077385000 },
        { year: 1989, value: 22378970000 },
        { year: 1990, value: 22752700000 },
        { year: 1991, value: 23229475000 },
        { year: 1992, value: 22567199000 },
        { year: 1993, value: 22798350000 },
        { year: 1994, value: 23034776000 },
        { year: 1995, value: 23524491000 },
        { year: 1996, value: 24250161000 },
        { year: 1997, value: 24395952000 },
        { year: 1998, value: 24330945000 },
        { year: 1999, value: 24833495000 },
        { year: 2000, value: 25501286000 },
        { year: 2001, value: 25674930000 },
        { year: 2002, value: 26248288000 },
        { year: 2003, value: 27648650000 },
        { year: 2004, value: 28620194000 },
        { year: 2005, value: 29592103000 },
        { year: 2006, value: 30605767000 },
        { year: 2007, value: 31499735000 },
        { year: 2008, value: 32041902000 },
        { year: 2009, value: 31493265000 },
        { year: 2010, value: 33306330000 },
        { year: 2011, value: 34436470000 },
        { year: 2012, value: 34935450000 },
        { year: 2013, value: 35232470000 },
        { year: 2014, value: 35466195000 },
        { year: 2015, value: 35463213000 },
        { year: 2016, value: 35460026000 },
        { year: 2017, value: 36025455000 },
        { year: 2018, value: 36766945000 },
        { year: 2019, value: 37040103000 },
        { year: 2020, value: 35007738000 },
        { year: 2021, value: 36816544000 },
        { year: 2022, value: 37149786000 },
    ]

    const [increase, setIncrease] = useState(`${((data[data.length - 1].value - data[0].value) / 1000000000).toFixed(2)} Billion tons`)

    useEffect(() => {
        const vw = window.innerWidth / 100
        const vh = window.innerHeight / 100

        const svg = d3
            .select("#graph-container")
            .append("svg")
            .attr("width", (width + 2 * marginX) * vw)
            .attr("height", (height + 2 * marginY) * vh)
            .append("g")
            .attr("transform", `translate(${marginX * vw}, ${marginY * vh})`)

        const x = d3.scaleLinear().range([0, width * vw])
        const y = d3.scaleLinear().range([height * vh, 0])

        x.domain(d3.extent(data, (iter) => iter.year))
        y.domain([0, d3.max(data, (iter) => iter.value)])

        window.innerWidth < 900 ?
            svg.append("g")
                .call(d3.axisBottom(x).ticks(5).tickFormat(val => val))
                .attr("class", "x-axis")
                .attr("transform", `translate(0, ${height * vh})`)
                .attr("font-size", "0.75rem")
                .call((g) => g.select(".domain").remove())
                .selectAll(".tick line")
                .style("stroke-opacity", 0)
            :
            svg.append("g")
                .call(d3.axisBottom(x).tickFormat(val => val))
                .attr("class", "x-axis")
                .attr("transform", `translate(0, ${height * vh})`)
                .attr("font-size", "1rem")
                .call((g) => g.select(".domain").remove())
                .selectAll(".tick line")
                .style("stroke-opacity", 0)

        window.innerWidth > 900 ?
            svg.append("g")
                .call(
                    d3
                        .axisLeft(y)
                        .tickFormat((val) => `${val / 1000000000}b`)
                        .tickSize(0)
                        .tickPadding(10)
                )
                .attr("class", "y-axis")
                .attr("font-size", "1rem")
                .call((g) => g.select(".domain").remove())
                .selectAll(".tick line")
                .style("stroke-opacity", 0)
            : svg.append("g")
                .call(
                    d3
                        .axisLeft(y)
                        .tickFormat((val) => `${val / 1000000000}b`)
                        .tickSize(0)
                        .tickPadding(10)
                )
                .attr("class", "y-axis")
                .attr("font-size", "0.75rem")
                .call((g) => g.select(".domain").remove())
                .selectAll(".tick line")
                .style("stroke-opacity", 0)

        svg.selectAll(".tick text").attr("fill", "#555")

        svg.selectAll("xGrid")
            .data(x.ticks().slice(1))
            .join("line")
            .attr("x1", d => x(d))
            .attr("x2", d => x(d))
            .attr("y1", 0)
            .attr("y2", height * vh)
            .attr("stroke", "#c8c8c8")
            .attr("stroke-width", .5)

        svg.selectAll("yGrid")
            .data(y.ticks(d3.max(data, d => d.value) / 5000000000).slice(1))
            .join("line")
            .attr("x1", 0)
            .attr("x2", width * vw)
            .attr("y1", d => y(d))
            .attr("y2", d => y(d))
            .attr("stroke", "#c8c8c8")
            .attr("stroke-width", .5)

        // svg.append("text")
        //     .attr("transform", "rotate(-90)")
        //     .attr("y", 0 - marginX * vw / 2)
        //     .attr("x", - height * vh / 2)
        //     .attr("dy", "1em")
        //     .style("text-anchor", "middle")
        //     .style("Font-size", "16px")
        //     .style("fill", "#000")
        //     .style("font-family", "Milliard")
        //     .text("Total Carbon Dioxide Emissions (in tons)")

        // svg.append("text")
        //     .attr("y", (height + marginY / 2) * vh)
        //     .attr("x", width * vw / 2)
        //     .attr("dy", "1em")
        //     .style("text-anchor", "middle")
        //     .style("Font-size", "16px")
        //     .style("fill", "#000")
        //     .style("font-family", "Milliard")
        //     .text("Year")

        const tooltip = d3.select("#graph-container")
            .append("div")
            .attr("class", "tooltip");

        const circle = svg.append("circle")
            .attr("r", 0)
            .attr("fill", "steelblue")
            .attr("class", "tooltip-circle")
            .style("stroke", "white")
            .attr("opacity", .70)
            .style("pointer-events", "none");
        // create a listening rectangle

        const listeningRect = svg.append("rect")
            .attr("width", width * vw)
            .attr("height", height * vh)
            .attr("class", "listeningRect");

        // create the mouse move function

        listeningRect.on("mousemove", function (event) {
            const [xCoord] = d3.pointer(event, this);
            const bisectDate = d3.bisector(d => d.year).left;
            const x0 = x.invert(xCoord);
            const i = bisectDate(data, x0, 1);
            const d0 = data[i - 1];
            const d1 = data[i] || { value: 0, year: 0 };
            const d = x0 - d0.year > d1.year - x0 ? d1 : d0;
            const xPos = x(d.year);
            const yPos = y(d.value);


            // Update the circle position

            circle.attr("cx", xPos)
                .attr("cy", yPos);

            // Add transition for the circle radius

            circle.transition()
                .duration(50)
                .attr("r", 5);

            // add in  our tooltip

            const tooltipContent = d.value === undefined ? "N/A" :
                (d.value / 1000000000).toFixed(2) === 0 ? `${d.value} tons` : `${(d.value / 1000000000).toFixed(2)} B tons`
            tooltip
                .style("display", "block")
                .style("left", `${xPos + 100}px`)
                .style("top", `${yPos + 50}px`)
                .html(`<strong>Year:</strong> ${d.year}<br><strong>Carbon Emission:</strong> ${tooltipContent}`)
        });
        // listening rectangle mouse leave function

        listeningRect.on("mouseleave", function () {
            circle.transition()
                .duration(50)
                .attr("r", 0);

            tooltip.style("display", "none");
        });

        // const sliderRange = sliderBottom()
        //     .min(d3.min(data, d => d.year))
        //     .max(d3.max(data, d => d.year))
        //     .width(300)
        //     .ticks(3)
        //     .default([d3.min(data, d => d.year), d3.max(data, d => d.year)])
        //     .fill('#85bb65');


        // // Add the slider to the DOM
        // const gRange = d3
        //     .select('#slider-range')
        //     .append('svg')
        //     .attr('width', 500)
        //     .attr('height', 100)
        //     .append('g')
        //     .attr('transform', 'translate(90,30)');

        // gRange.call(sliderRange);

        const line = d3
            .line()
            .x((d) => x(d.year))
            .y((d) => y(d.value))

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", 1)
            .attr("class", "line-CO")
            .attr("d", line)

        // const lineTemp = d3.line().x((d => x(d.year))).y(d => y(d.value))
        // svg.append("path")
        //     .datum(temp)
        //     .attr("fill", "none")
        //     .attr("stroke", "red")
        //     .attr("stroke-width", 1)
        //     .attr("class", "line-temp")
        //     .attr("d", lineTemp)


    }, [])

    const handleChange = () => {

        const val = [document.getElementById("num1").value, document.getElementById("num2").value]
        const vw = window.innerWidth / 100
        const vh = window.innerHeight / 100

        const svg = d3
            .select("#graph-container svg")

        const x = d3.scaleLinear().range([0, width * vw])
        const y = d3.scaleLinear().range([height * vh, 0])

        const line = d3
            .line()
            .x((d) => x(d.year))
            .y((d) => y(d.value))
        // Set new domain for x scale
        x.domain(val);

        // Filter data based on slider values
        const filteredData = data.filter(d => d.year >= val[0] && d.year <= val[1]);
        // Update the line and area to new domain
        // Set new domain for y scale based on new data
        y.domain([0, d3.max(filteredData, d => d.value)]);


        // Update the x-axis with new domain

        window.innerWidth > 900 ?
            svg.select(".x-axis")
                .transition()
                .duration(300) // transition duration in ms
                .call(d3.axisBottom(x).tickFormat(val => val))
                .style("stroke-opacity", 0)

            : svg.select(".x-axis")
                .transition()
                .duration(300) // transition duration in ms
                .call(d3.axisBottom(x).ticks(5).tickFormat(val => val))
                .style("stroke-opacity", 0)


        // Update the y-axis with new domain

        svg.select(".line-CO").attr("d", line(filteredData))

        svg.select(".y-axis")
            .transition()
            .duration(300) // transition duration in ms
            .call(d3
                .axisLeft(y)
                .tickFormat((val) => `${val / 1000000000}b`)
                .tickSize(0)
                .tickPadding(10))
            .style("stroke-opacity", 0)



        const listeningRect = d3.select(".listeningRect")
        const circle = d3.select(".tooltip-circle")
        const tooltip = d3.select(".tooltip")

        listeningRect.on("mousemove", function (event) {
            const [xCoord] = d3.pointer(event, this);
            const bisectDate = d3.bisector(d => d.year).left;
            const x0 = x.invert(xCoord);
            const i = bisectDate(filteredData, x0, 1);
            const d0 = filteredData[i - 1];
            const d1 = filteredData[i] || { value: 0, year: 0 };
            const d = x0 - d0.year > d1.year - x0 ? d1 : d0;
            const xPos = x(d.year);
            const yPos = y(d.value);


            // Update the circle position

            circle.attr("cx", xPos)
                .attr("cy", yPos);

            // Add transition for the circle radius

            circle.transition()
                .duration(50)
                .attr("r", 5);

            // add in  our tooltip

            const tooltipContent = d.value === undefined ? "N/A" :
                (d.value / 1000000000).toFixed(2) === 0 ? `${d.value} tons` : `${(d.value / 1000000000).toFixed(2)} B tons`
            tooltip
                .style("display", "block")
                .style("left", `${xPos + 100}px`)
                .style("top", `${yPos + 50}px`)
                .html(`<strong>Year:</strong> ${d.year}<br><strong>Carbon Emission:</strong> ${tooltipContent}`)
        });

        setIncrease(`${((filteredData[filteredData.length - 1].value - filteredData[0].value) / 1000000000).toFixed(2)} Billion tons`)

    };

    return (
        <section className="graph-component">
            <h1>Global Mean Carbon Dioxide Emissions</h1>
            <section id="graph-container"></section>
            <div id="slider-range"></div>

            <div className="graph-user-interaction">
                <div className="graph-inputs">
                    <div className="graph-input-box">
                        <label>Base Year</label>
                        <input type="number" id="num1" placeholder="1750" />
                    </div>
                    <div className="graph-input-box">
                        <label>Final Year</label>
                        <input type="number" id="num2" placeholder="2022" />
                    </div>
                </div>
                <button onClick={handleChange}>Submit</button>
            </div>

            <p className="graph-increased">Between the years {document.getElementById("num1")?.value || 1750} - {document.getElementById("num2")?.value || 2022} the Carbon Dioxide emissions have increased by <strong>{increase}</strong></p>
        </section>
    )
}
