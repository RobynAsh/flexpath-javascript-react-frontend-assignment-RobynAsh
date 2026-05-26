import { useMemo } from 'react';
import AnalyticsCard from './AnalyticsCard.JSX';

const getMedian = (arr) => {
  if (!arr.length) return 0;

  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  const median =
    sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(
    median
  );
};

const getAverage = (arr) => {
  if (!arr.length) return 0;

  const sum = arr.reduce((_sum, currentValue) => _sum + currentValue, 0);
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(
    sum / arr.length
  );
};

const Analytics = ({ searchResults }) => {
  const {
    appUsageAverage,
    appUsageMedian,
    screenOnAverage,
    screenOnMedian,
    appInstallAverage,
    appInstallMedian,
    ageAverage,
    ageMedian,
  } = useMemo(() => {
    const totals = {
      totalAppUsage: [],
      totalScreenOn: [],
      totalAppInstall: [],
      totalAge: [],
    };

    searchResults?.forEach((result) => {
      totals.totalAppUsage.push(Number(result['App Usage Time (min/day)']));
      totals.totalScreenOn.push(Number(result['Screen On Time (hours/day)']));
      totals.totalAppInstall.push(Number(result['Number of Apps Installed']));
      totals.totalAge.push(Number(result['Age']));
    });

    return {
      appUsageAverage: getAverage(totals.totalAppUsage),
      appUsageMedian: getMedian(totals.totalAppUsage),
      screenOnAverage: getAverage(totals.totalScreenOn),
      screenOnMedian: getMedian(totals.totalScreenOn),
      appInstallAverage: getAverage(totals.totalAppInstall),
      appInstallMedian: getMedian(totals.totalAppInstall),
      ageAverage: getAverage(totals.totalAge),
      ageMedian: getMedian(totals.totalAge),
    };
  }, [searchResults]);

  return (
    <div className="row mb-4">
      <div className="col">
        <AnalyticsCard
          title="App Usage Time (min/day)"
          average={`${appUsageAverage} minutes`}
          median={`${appUsageMedian} minutes`}
        />
      </div>
      <div className="col">
        <AnalyticsCard
          title="Screen On Time (hours/day)"
          average={`${screenOnAverage} hours`}
          median={`${screenOnMedian} hours`}
        />
      </div>
      <div className="col">
        <AnalyticsCard
          title="Number of Apps Installed"
          average={`${appInstallAverage} apps`}
          median={`${appInstallMedian} apps`}
        />
      </div>
      <div className="col">
        <AnalyticsCard
          title="Age"
          average={`${ageAverage} years old`}
          median={`${ageAverage} years old`}
        />
      </div>
    </div>
  );
};

export default Analytics;
