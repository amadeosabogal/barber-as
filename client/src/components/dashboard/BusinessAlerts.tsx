import { mockData } from '../../data/mockData';
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-react';
import { cn } from '../../utils/cn';

const BusinessAlerts = () => {
  const getAlertIcon = (type: string) => {
    switch(type) {
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'danger': return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'success': return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      default: return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getAlertStyle = (type: string) => {
    switch(type) {
      case 'warning': return 'bg-yellow-500/10 border-yellow-500/20';
      case 'danger': return 'bg-red-500/10 border-red-500/20';
      case 'success': return 'bg-green-500/10 border-green-500/20';
      default: return 'bg-blue-500/10 border-blue-500/20';
    }
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-5">
      <h3 className="text-lg font-bold text-text-primary mb-6">Alertas del negocio</h3>
      
      <div className="space-y-3">
        {mockData.alerts.map((alert) => (
          <div 
            key={alert.id} 
            className={cn(
              "flex items-start gap-3 p-3 rounded-lg border",
              getAlertStyle(alert.type)
            )}
          >
            <div className="mt-0.5">{getAlertIcon(alert.type)}</div>
            <p className="text-sm text-text-primary font-medium">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessAlerts;
