import React, { useEffect, useState } from 'react'

import { Alert, Button, Container, LoadingSpinner, Select } from '@sourcegraph/wildcard'

import styles from './SiteAdminUpdatesSelf.module.scss'

export const SiteAdminUpdatesSelf: React.FC = () => {
    const [showPanel, setShowPanel] = useState(false)
    const [version, setVersion] = useState()

    // Add a HACK cute delayed effect
    useEffect(() => {
        setTimeout(() => {
            setShowPanel(true)
        }, 3000)
    })

    return (
        <>
            <Container className={'mb-3'}>
                <h4>Version Self Update</h4>
                {!showPanel ? (
                    <div>
                        <LoadingSpinner /> Checking if we can self-update. Please wait...
                    </div>
                ) : (
                    <>
                        <div className={styles.upgradeSelect}>
                            Update to a new version:
                            <Select className={styles.versions} onChange={e => setVersion(e.target.value)}>
                                <option value="none">Select Version</option>
                                <option value="v5.0.5">5.0.5</option>
                                <option value="v5.1.0">5.1.0</option>
                                <option value="v5.2.0-rc-1">5.2.0-rc-1</option>
                            </Select>
                            <Button variant="primary" disabled={!!!version || version === 'none'}>
                                Start Upgrade
                            </Button>
                        </div>
                        {version > 'v5.0.5' ? (
                            <Alert variant="warning" className="mt-4">
                                You are upgrading to multiple versions ahead. We will use <em>Multi Upgrade</em> and the
                                service will be down for a little while longer.
                            </Alert>
                        ) : null}
                    </>
                )}
            </Container>
        </>
    )
}
