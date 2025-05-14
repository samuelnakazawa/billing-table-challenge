import billingHeader from '../data/billing-header.json'
import billingHistory from '../data/billing-history.json'

export function TableContainer() {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    return (
        <table>
            <thead>
                <tr>
                    {billingHeader.map((item, index) => (
                        <th key={index} className="table-header">
                            {item.name}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {billingHistory.map((item, index) => (
                    <tr key={index}>
                        <td>
                            {new Date(item.created_at).toLocaleDateString('en-US', options)}
                        </td>
                        <td>{item.plan}</td>
                        <td>{item.status}</td>
                        <td>{item.amount}</td>
                        <td>
                            <a href={item.invoice_url}>Download </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
