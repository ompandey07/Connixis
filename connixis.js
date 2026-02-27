(function() {
    'use strict';

    // ============================================
    // DEVICE TYPE CONFIGURATIONS
    // ============================================
    const deviceTypes = {
        // End Devices
        pc: { 
            icon: 'ri-computer-fill', 
            iconClass: 'endpoint', 
            ports: 1, 
            canRoute: false, 
            layer: 3, 
            category: 'End Device',
            defaultIP: '192.168.1'
        },
        laptop: { 
            icon: 'ri-macbook-fill', 
            iconClass: 'endpoint', 
            ports: 1, 
            canRoute: false, 
            layer: 3, 
            category: 'End Device',
            defaultIP: '192.168.1'
        },
        server: { 
            icon: 'ri-server-fill', 
            iconClass: 'endpoint', 
            ports: 2, 
            canRoute: false, 
            layer: 3, 
            category: 'Server',
            defaultIP: '10.0.1'
        },
        workstation: { 
            icon: 'ri-computer-fill', 
            iconClass: 'endpoint', 
            ports: 1, 
            canRoute: false, 
            layer: 3, 
            category: 'Workstation',
            defaultIP: '192.168.1'
        },
        mobile: { 
            icon: 'ri-smartphone-fill', 
            iconClass: 'wireless', 
            ports: 1, 
            canRoute: false, 
            layer: 3, 
            wireless: true, 
            category: 'Mobile',
            defaultIP: '192.168.10'
        },
        tablet: { 
            icon: 'ri-tablet-fill', 
            iconClass: 'wireless', 
            ports: 1, 
            canRoute: false, 
            layer: 3, 
            wireless: true, 
            category: 'Tablet',
            defaultIP: '192.168.10'
        },
        printer: { 
            icon: 'ri-printer-fill', 
            iconClass: 'endpoint', 
            ports: 1, 
            canRoute: false, 
            layer: 3, 
            category: 'Printer',
            defaultIP: '192.168.1'
        },
        'ip-phone': { 
            icon: 'ri-phone-fill', 
            iconClass: 'endpoint', 
            ports: 2, 
            canRoute: false, 
            layer: 3, 
            category: 'VoIP',
            defaultIP: '192.168.5'
        },

        // Network Devices
        router: { 
            icon: 'ri-router-fill', 
            iconClass: 'network', 
            ports: 4, 
            canRoute: true, 
            layer: 3, 
            category: 'Router',
            defaultIP: '10.0.0'
        },
        switch: { 
            icon: 'ri-git-branch-fill', 
            iconClass: 'network', 
            ports: 24, 
            canRoute: false, 
            layer: 2, 
            category: 'Switch L2',
            defaultIP: '192.168.1'
        },
        l3switch: { 
            icon: 'ri-git-merge-fill', 
            iconClass: 'network', 
            ports: 24, 
            canRoute: true, 
            layer: 3, 
            category: 'Switch L3',
            defaultIP: '192.168.1'
        },
        hub: { 
            icon: 'ri-share-circle-fill', 
            iconClass: 'network', 
            ports: 8, 
            canRoute: false, 
            layer: 1, 
            category: 'Hub',
            defaultIP: null
        },
        bridge: { 
            icon: 'ri-arrow-left-right-fill', 
            iconClass: 'network', 
            ports: 2, 
            canRoute: false, 
            layer: 2, 
            category: 'Bridge',
            defaultIP: '192.168.1'
        },
        repeater: { 
            icon: 'ri-repeat-fill', 
            iconClass: 'network', 
            ports: 2, 
            canRoute: false, 
            layer: 1, 
            category: 'Repeater',
            defaultIP: null
        },
        modem: { 
            icon: 'ri-base-station-fill', 
            iconClass: 'network', 
            ports: 2, 
            canRoute: false, 
            layer: 2, 
            category: 'Modem',
            defaultIP: '192.168.0'
        },
        gateway: { 
            icon: 'ri-door-open-fill', 
            iconClass: 'network', 
            ports: 2, 
            canRoute: true, 
            layer: 3, 
            category: 'Gateway',
            defaultIP: '10.0.0'
        },

        // Wireless Devices
        accesspoint: { 
            icon: 'ri-wireless-charging-fill', 
            iconClass: 'wireless', 
            ports: 1, 
            canRoute: false, 
            layer: 2, 
            wireless: true, 
            category: 'Access Point',
            defaultIP: '192.168.1'
        },
        wlc: { 
            icon: 'ri-radar-fill', 
            iconClass: 'wireless', 
            ports: 4, 
            canRoute: false, 
            layer: 3, 
            category: 'WLC',
            defaultIP: '10.0.2'
        },
        mesh: { 
            icon: 'ri-bubble-chart-fill', 
            iconClass: 'wireless', 
            ports: 1, 
            canRoute: false, 
            layer: 2, 
            wireless: true, 
            category: 'Mesh',
            defaultIP: '192.168.1'
        },
        antenna: { 
            icon: 'ri-signal-tower-fill', 
            iconClass: 'wireless', 
            ports: 1, 
            canRoute: false, 
            layer: 1, 
            wireless: true, 
            category: 'Antenna',
            defaultIP: null
        },

        // Security Devices
        firewall: { 
            icon: 'ri-fire-fill', 
            iconClass: 'security', 
            ports: 4, 
            canRoute: true, 
            layer: 3, 
            category: 'Firewall',
            defaultIP: '10.0.0'
        },
        ngfw: { 
            icon: 'ri-shield-flash-fill', 
            iconClass: 'security', 
            ports: 4, 
            canRoute: true, 
            layer: 7, 
            category: 'NGFW',
            defaultIP: '10.0.0'
        },
        ids: { 
            icon: 'ri-search-eye-fill', 
            iconClass: 'security', 
            ports: 2, 
            canRoute: false, 
            layer: 3, 
            category: 'IDS/IPS',
            defaultIP: '10.0.0'
        },
        vpn: { 
            icon: 'ri-lock-2-fill', 
            iconClass: 'security', 
            ports: 2, 
            canRoute: true, 
            layer: 3, 
            category: 'VPN',
            defaultIP: '10.10.0'
        },
        waf: { 
            icon: 'ri-shield-star-fill', 
            iconClass: 'security', 
            ports: 2, 
            canRoute: false, 
            layer: 7, 
            category: 'WAF',
            defaultIP: '10.0.0'
        },
        proxy: { 
            icon: 'ri-filter-3-fill', 
            iconClass: 'security', 
            ports: 2, 
            canRoute: false, 
            layer: 7, 
            category: 'Proxy',
            defaultIP: '10.0.0'
        },

        // Cloud & WAN
        cloud: { 
            icon: 'ri-cloud-fill', 
            iconClass: 'cloud', 
            ports: 8, 
            canRoute: true, 
            layer: 3, 
            category: 'Cloud',
            defaultIP: '172.16.0'
        },
        internet: { 
            icon: 'ri-earth-fill', 
            iconClass: 'cloud', 
            ports: 4, 
            canRoute: true, 
            layer: 3, 
            category: 'Internet',
            defaultIP: 'PUBLIC'
        },
        datacenter: { 
            icon: 'ri-database-2-fill', 
            iconClass: 'cloud', 
            ports: 8, 
            canRoute: true, 
            layer: 3, 
            category: 'Data Center',
            defaultIP: '172.16.0'
        },
        loadbalancer: { 
            icon: 'ri-scales-3-fill', 
            iconClass: 'cloud', 
            ports: 4, 
            canRoute: true, 
            layer: 4, 
            category: 'Load Balancer',
            defaultIP: '10.0.2'
        },
        dns: { 
            icon: 'ri-global-fill', 
            iconClass: 'cloud', 
            ports: 1, 
            canRoute: false, 
            layer: 7, 
            category: 'DNS',
            defaultIP: '10.0.1'
        },
        dhcp: { 
            icon: 'ri-settings-4-fill', 
            iconClass: 'cloud', 
            ports: 1, 
            canRoute: false, 
            layer: 7, 
            category: 'DHCP',
            defaultIP: '10.0.1'
        },

        // IoT Devices
        'iot-sensor': { 
            icon: 'ri-sensor-fill', 
            iconClass: 'wireless', 
            ports: 1, 
            canRoute: false, 
            layer: 3, 
            category: 'IoT Sensor',
            defaultIP: '192.168.20'
        },
        camera: { 
            icon: 'ri-camera-fill', 
            iconClass: 'wireless', 
            ports: 1, 
            canRoute: false, 
            layer: 3, 
            category: 'IP Camera',
            defaultIP: '192.168.20'
        },
        smartdevice: { 
            icon: 'ri-home-wifi-fill', 
            iconClass: 'wireless', 
            ports: 1, 
            canRoute: false, 
            layer: 3, 
            category: 'Smart Device',
            defaultIP: '192.168.20'
        },
        plc: { 
            icon: 'ri-cpu-fill', 
            iconClass: 'network', 
            ports: 2, 
            canRoute: false, 
            layer: 2, 
            category: 'PLC',
            defaultIP: '192.168.100'
        }
    };

    // ============================================
    // GLOBAL STATE
    // ============================================
    const state = {
        devices: [],
        connections: [],
        vlans: [
            { id: 1, name: 'Default', color: '#3b82f6', ports: 'All' },
            { id: 10, name: 'Management', color: '#10b981', ports: 'Fa0/1-4' },
            { id: 20, name: 'Users', color: '#f59e0b', ports: 'Fa0/5-12' },
            { id: 30, name: 'Servers', color: '#ef4444', ports: 'Fa0/13-16' },
            { id: 100, name: 'Guest', color: '#8b5cf6', ports: 'Fa0/17-24' }
        ],
        aclRules: [
            { seq: 10, action: 'permit', protocol: 'tcp', source: 'any', dest: '80,443', desc: 'HTTP/HTTPS' },
            { seq: 20, action: 'permit', protocol: 'icmp', source: 'any', dest: 'any', desc: 'Ping' },
            { seq: 30, action: 'permit', protocol: 'udp', source: 'any', dest: '53', desc: 'DNS' },
            { seq: 40, action: 'deny', protocol: 'tcp', source: 'any', dest: '23', desc: 'Telnet' },
            { seq: 100, action: 'deny', protocol: 'ip', source: 'any', dest: 'any', desc: 'Deny All' }
        ],
        selectedDevice: null,
        selectedConnection: null,
        connectionMode: false,
        connectionStart: null,
        deviceIdCounter: 0,
        connectionIdCounter: 0,
        packets: [],
        zoomLevel: 1,
        panOffset: { x: 0, y: 0 },
        simulationRunning: true,
        commandHistory: [],
        commandHistoryIndex: -1,
        isDragging: false,
        draggedDevice: null,
        dragOffset: { x: 0, y: 0 }
    };

    // ============================================
    // DOM ELEMENTS CACHE
    // ============================================
    const elements = {};

    function cacheElements() {
        const ids = [
            'canvasContainer', 'networkCanvas', 'sidebar', 'sidebarToggle', 
            'sidebarOverlay', 'rightPanel', 'panelToggle', 'contextMenu',
            'terminalOutput', 'terminalInput', 'deviceCount', 'connectionCount',
            'packetCount', 'totalDevices', 'totalLinks', 'activePackets',
            'networkHealth', 'currentTime', 'zoomLevel', 'deviceConfigGroup',
            'interfaceConfig', 'interfaceList', 'emptyState', 'deviceName',
            'deviceIP', 'deviceSubnet', 'deviceGateway', 'deviceDNS',
            'deviceMAC', 'deviceVLAN', 'routingTableBody', 'routeNetwork',
            'routeMask', 'routeNextHop', 'routeInterface', 'routeMetric',
            'subnetModal', 'pingModal', 'subnetIP', 'subnetCIDR', 'subnetResults',
            'pingSource', 'pingDestination', 'pingCount', 'pingSize', 'pingOutput',
            'toastContainer', 'cableType', 'selectTool', 'connectTool'
        ];

        ids.forEach(id => {
            elements[id] = document.getElementById(id);
        });
    }

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================

    /**
     * Generate a random MAC address
     */
    function generateMAC() {
        const hex = '0123456789ABCDEF';
        let mac = '';
        for (let i = 0; i < 6; i++) {
            mac += hex[Math.floor(Math.random() * 16)];
            mac += hex[Math.floor(Math.random() * 16)];
            if (i < 5) mac += ':';
        }
        return mac;
    }

    /**
     * Generate an IP address based on device type
     */
    function generateIP(type) {
        const config = deviceTypes[type];
        if (!config || !config.defaultIP || config.defaultIP === 'PUBLIC') {
            return config?.defaultIP || null;
        }
        return `${config.defaultIP}.${Math.floor(Math.random() * 254) + 1}`;
    }

    /**
     * Show toast notification
     */
    function showToast(message, type = 'info') {
        const container = elements.toastContainer;
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const icons = {
            success: 'ri-checkbox-circle-fill',
            error: 'ri-error-warning-fill',
            warning: 'ri-alert-fill',
            info: 'ri-information-fill'
        };

        toast.innerHTML = `
            <i class="${icons[type] || icons.info}"></i>
            <span class="toast-message">${message}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    /**
     * Update statistics display
     */
    function updateStats() {
        const stats = {
            deviceCount: state.devices.length,
            connectionCount: state.connections.length,
            totalDevices: state.devices.length,
            totalLinks: state.connections.length,
            activePackets: state.packets.length
        };

        Object.entries(stats).forEach(([key, value]) => {
            if (elements[key]) {
                elements[key].textContent = value;
            }
        });
    }

    /**
     * Update current time display
     */
    function updateTime() {
        if (elements.currentTime) {
            elements.currentTime.textContent = new Date().toLocaleTimeString();
        }
    }

    /**
     * Apply zoom level
     */
    function applyZoom() {
        if (elements.canvasContainer) {
            elements.canvasContainer.style.transform = `scale(${state.zoomLevel})`;
            elements.canvasContainer.style.transformOrigin = 'center center';
        }
        if (elements.zoomLevel) {
            elements.zoomLevel.textContent = `${Math.round(state.zoomLevel * 100)}%`;
        }
    }

    // ============================================
    // DEVICE MANAGEMENT
    // ============================================

    /**
     * Create a device DOM element
     */
    function createDeviceElement(device) {
        const typeConfig = deviceTypes[device.type];
        if (!typeConfig) return null;

        const div = document.createElement('div');
        div.className = 'network-device';
        div.id = `device-${device.id}`;
        div.style.left = `${device.x}px`;
        div.style.top = `${device.y}px`;

        const maxPorts = Math.min(typeConfig.ports, 6);
        const portsHTML = Array(maxPorts).fill(0).map((_, i) =>
            `<div class="port-indicator" data-port="${i}" title="Port ${i}"></div>`
        ).join('');

        div.innerHTML = `
            <div class="device-header">
                <div class="status-indicator ${device.status}"></div>
                <span class="device-type-badge">${typeConfig.category}</span>
            </div>
            <div class="device-icon-wrapper ${typeConfig.iconClass}">
                <i class="${typeConfig.icon}"></i>
            </div>
            <div class="device-name">${device.name}</div>
            <div class="device-ip">${device.ip || 'No IP'}</div>
            <div class="device-mac">${device.mac}</div>
            <div class="ports-container">${portsHTML}</div>
        `;

        // Add event listeners
        div.addEventListener('mousedown', (e) => handleDeviceMouseDown(e, device));
        div.addEventListener('click', (e) => handleDeviceClick(e, device));
        div.addEventListener('contextmenu', (e) => handleDeviceContextMenu(e, device));
        div.addEventListener('dblclick', () => openDeviceConsole(device));

        // Port event listeners
        div.querySelectorAll('.port-indicator').forEach(port => {
            port.addEventListener('click', (e) => {
                e.stopPropagation();
                handlePortClick(device, parseInt(port.dataset.port));
            });

            port.addEventListener('mouseenter', () => {
                if (state.connectionMode && state.connectionStart && 
                    state.connectionStart.device.id !== device.id) {
                    port.style.transform = 'scale(1.3)';
                    port.style.background = 'var(--accent-primary-light)';
                }
            });

            port.addEventListener('mouseleave', () => {
                if (!port.classList.contains('connected') && !port.classList.contains('connecting')) {
                    port.style.transform = '';
                    port.style.background = '';
                }
            });
        });

        return div;
    }

    /**
     * Add a new device to the canvas
     */
    function addDevice(type, x, y) {
        const typeConfig = deviceTypes[type];
        if (!typeConfig) {
            showToast(`Unknown device type: ${type}`, 'error');
            return null;
        }

        const device = {
            id: state.deviceIdCounter++,
            type: type,
            name: `${type.charAt(0).toUpperCase() + type.slice(1)}-${state.deviceIdCounter}`,
            x: x,
            y: y,
            ip: generateIP(type),
            subnet: '255.255.255.0',
            gateway: '192.168.1.1',
            dns: '8.8.8.8',
            mac: generateMAC(),
            vlan: 1,
            status: 'online',
            ports: typeConfig.ports,
            canRoute: typeConfig.canRoute,
            layer: typeConfig.layer,
            interfaces: [],
            routingTable: [],
            arpTable: [],
            macTable: [],
            config: {
                hostname: `${type.charAt(0).toUpperCase() + type.slice(1)}-${state.deviceIdCounter}`,
                enablePassword: '',
                sshEnabled: false,
                spanningTree: true
            }
        };

        // Initialize interfaces
        for (let i = 0; i < typeConfig.ports; i++) {
            const ifName = typeConfig.ports > 4 ? `Fa0/${i}` : `Gi0/${i}`;
            device.interfaces.push({
                id: i,
                name: ifName,
                ip: i === 0 ? device.ip : null,
                subnet: '255.255.255.0',
                status: 'up',
                speed: typeConfig.ports > 4 ? '100Mbps' : '1Gbps',
                duplex: 'full',
                vlan: device.vlan,
                mode: 'access',
                connected: false,
                connectedTo: null
            });
        }

        // Initialize routing table for routing devices
        if (typeConfig.canRoute && device.ip && device.ip !== 'PUBLIC') {
            const networkPart = device.ip.split('.').slice(0, 3).join('.');
            device.routingTable = [
                { 
                    network: '0.0.0.0', 
                    mask: '0.0.0.0', 
                    nextHop: device.gateway, 
                    interface: 'Gi0/0', 
                    metric: 1, 
                    protocol: 'S*', 
                    ad: 1 
                },
                { 
                    network: `${networkPart}.0`, 
                    mask: '255.255.255.0', 
                    nextHop: 'directly connected', 
                    interface: 'Gi0/0', 
                    metric: 0, 
                    protocol: 'C', 
                    ad: 0 
                }
            ];
        }

        state.devices.push(device);

        if (elements.canvasContainer) {
            const element = createDeviceElement(device);
            if (element) {
                elements.canvasContainer.appendChild(element);
            }
        }

        updateStats();
        showToast(`Added ${typeConfig.category}: ${device.name}`, 'success');
        addTerminalLine(`%SYS-5-CONFIG_I: Configured from console`, 'info');

        return device;
    }

    /**
     * Update a device's DOM element
     */
    function updateDeviceElement(device) {
        const el = document.getElementById(`device-${device.id}`);
        if (!el) return;

        const indicator = el.querySelector('.status-indicator');
        if (indicator) {
            indicator.className = `status-indicator ${device.status}`;
        }

        const nameEl = el.querySelector('.device-name');
        if (nameEl) nameEl.textContent = device.name;

        const ipEl = el.querySelector('.device-ip');
        if (ipEl) ipEl.textContent = device.ip || 'No IP';

        const macEl = el.querySelector('.device-mac');
        if (macEl) macEl.textContent = device.mac;
    }

    /**
     * Delete a device and its connections
     */
    function deleteDevice(device) {
        // Remove associated connections
        const connectionsToRemove = state.connections.filter(c =>
            c.device1 === device.id || c.device2 === device.id
        );

        connectionsToRemove.forEach(conn => {
            deleteConnection(conn, false);
        });

        // Remove device from state
        state.devices = state.devices.filter(d => d.id !== device.id);

        // Remove DOM element
        const el = document.getElementById(`device-${device.id}`);
        if (el) el.remove();

        // Clear selection if needed
        if (state.selectedDevice?.id === device.id) {
            state.selectedDevice = null;
            if (elements.deviceConfigGroup) elements.deviceConfigGroup.style.display = 'none';
            if (elements.interfaceConfig) elements.interfaceConfig.style.display = 'none';
            if (elements.emptyState) elements.emptyState.style.display = 'block';
        }

        updateStats();
        showToast(`Deleted ${device.name}`, 'success');
        addTerminalLine(`%SYS-5-RELOAD: Device ${device.name} removed`, 'warning');
    }

    /**
     * Duplicate a device
     */
    function duplicateDevice(device) {
        addDevice(device.type, device.x + 50, device.y + 50);
    }

    // ============================================
    // DEVICE INTERACTION HANDLERS
    // ============================================

    /**
     * Handle mouse down on device (start drag)
     */
    function handleDeviceMouseDown(e, device) {
        if (e.button !== 0 || state.connectionMode) return;
        e.preventDefault();

        state.draggedDevice = device;
        state.isDragging = true;

        const rect = e.target.closest('.network-device').getBoundingClientRect();
        state.dragOffset.x = e.clientX - rect.left;
        state.dragOffset.y = e.clientY - rect.top;

        const el = document.getElementById(`device-${device.id}`);
        if (el) el.style.zIndex = '100';

        document.addEventListener('mousemove', handleDeviceDrag);
        document.addEventListener('mouseup', handleDeviceDragEnd);
    }

    /**
     * Handle device dragging
     */
    function handleDeviceDrag(e) {
        if (!state.draggedDevice || !state.isDragging) return;

        const container = elements.canvasContainer;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        let x = e.clientX - rect.left - state.dragOffset.x;
        let y = e.clientY - rect.top - state.dragOffset.y;

        // Constrain to canvas bounds
        x = Math.max(0, Math.min(x, container.clientWidth - 100));
        y = Math.max(0, Math.min(y, container.clientHeight - 120));

        // Snap to grid
        x = Math.round(x / 20) * 20;
        y = Math.round(y / 20) * 20;

        state.draggedDevice.x = x;
        state.draggedDevice.y = y;

        const element = document.getElementById(`device-${state.draggedDevice.id}`);
        if (element) {
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
        }

        updateConnections();
    }

    /**
     * Handle drag end
     */
    function handleDeviceDragEnd() {
        if (state.draggedDevice) {
            const el = document.getElementById(`device-${state.draggedDevice.id}`);
            if (el) el.style.zIndex = '10';
        }

        state.draggedDevice = null;
        state.isDragging = false;

        document.removeEventListener('mousemove', handleDeviceDrag);
        document.removeEventListener('mouseup', handleDeviceDragEnd);
    }

    /**
     * Handle device click (select)
     */
    function handleDeviceClick(e, device) {
        e.stopPropagation();

        // Deselect previous device
        if (state.selectedDevice) {
            const prevEl = document.getElementById(`device-${state.selectedDevice.id}`);
            if (prevEl) prevEl.classList.remove('selected');
        }

        state.selectedDevice = device;

        const el = document.getElementById(`device-${device.id}`);
        if (el) el.classList.add('selected');

        showDeviceConfig(device);

        if (elements.emptyState) elements.emptyState.style.display = 'none';
    }

    /**
     * Handle device context menu
     */
    function handleDeviceContextMenu(e, device) {
        e.preventDefault();

        const menu = elements.contextMenu;
        if (!menu) return;

        menu.style.left = `${e.clientX}px`;
        menu.style.top = `${e.clientY}px`;
        menu.classList.add('active');
        menu.dataset.deviceId = device.id;
    }

    /**
     * Show device configuration in the right panel
     */
    function showDeviceConfig(device) {
        if (elements.deviceConfigGroup) {
            elements.deviceConfigGroup.style.display = 'block';
        }

        // Fill form fields
        const fields = {
            deviceName: device.name,
            deviceIP: device.ip || '',
            deviceSubnet: device.subnet || '255.255.255.0',
            deviceGateway: device.gateway || '',
            deviceDNS: device.dns || '',
            deviceMAC: device.mac,
            deviceVLAN: device.vlan
        };

        Object.entries(fields).forEach(([key, value]) => {
            if (elements[key]) {
                elements[key].value = value;
            }
        });

        // Show interface config for multi-port devices
        if (device.ports > 1 && elements.interfaceConfig && elements.interfaceList) {
            elements.interfaceConfig.style.display = 'block';
            elements.interfaceList.innerHTML = device.interfaces.slice(0, 8).map(iface => `
                <div class="interface-item">
                    <div class="interface-icon">
                        <i class="ri-ethernet-fill"></i>
                    </div>
                    <div class="interface-info">
                        <div class="interface-name">${iface.name}</div>
                        <div class="interface-details">${iface.ip || 'unassigned'} | ${iface.speed}</div>
                    </div>
                    <span class="interface-status ${iface.status}">${iface.status.toUpperCase()}</span>
                </div>
            `).join('');
        } else if (elements.interfaceConfig) {
            elements.interfaceConfig.style.display = 'none';
        }

        // Update routing table if router
        if (device.canRoute) {
            updateRoutingTableDisplay(device);
        }
    }

    // ============================================
    // CONNECTION MANAGEMENT
    // ============================================

    /**
     * Handle port click for connections
     */
    function handlePortClick(device, portIndex) {
        const portEl = document.querySelector(
            `#device-${device.id} .port-indicator[data-port="${portIndex}"]`
        );

        if (!state.connectionMode) {
            // Start connection
            state.connectionMode = true;
            state.connectionStart = { device, port: portIndex };

            if (portEl) portEl.classList.add('connecting');

            if (elements.connectTool) elements.connectTool.classList.add('active');
            if (elements.selectTool) elements.selectTool.classList.remove('active');

            const ifName = device.interfaces[portIndex]?.name || `Port ${portIndex}`;
            showToast(`Select destination port from ${device.name}:${ifName}`, 'info');
        } else {
            // Complete connection
            if (state.connectionStart && state.connectionStart.device.id !== device.id) {
                const port1Connected = state.connectionStart.device.interfaces[state.connectionStart.port]?.connected;
                const port2Connected = device.interfaces[portIndex]?.connected;

                if (port1Connected || port2Connected) {
                    showToast('One or both ports are already connected', 'warning');
                } else {
                    createConnection(state.connectionStart.device, state.connectionStart.port, device, portIndex);
                }
            }

            // Reset connection mode
            document.querySelectorAll('.port-indicator.connecting').forEach(p => {
                p.classList.remove('connecting');
            });

            state.connectionMode = false;
            state.connectionStart = null;

            if (elements.connectTool) elements.connectTool.classList.remove('active');
            if (elements.selectTool) elements.selectTool.classList.add('active');
        }
    }

    /**
     * Create a new connection between two devices
     */
    function createConnection(device1, port1, device2, port2) {
        const cableType = elements.cableType ? elements.cableType.value : 'ethernet';

        const connection = {
            id: state.connectionIdCounter++,
            device1: device1.id,
            port1: port1,
            device2: device2.id,
            port2: port2,
            type: cableType,
            status: 'active',
            bandwidth: cableType === 'fiber' ? '10Gbps' : '1Gbps',
            latency: Math.floor(Math.random() * 5) + 1
        };

        state.connections.push(connection);
        drawConnection(connection);

        // Update port indicators
        const port1El = document.querySelector(
            `#device-${device1.id} .port-indicator[data-port="${port1}"]`
        );
        const port2El = document.querySelector(
            `#device-${device2.id} .port-indicator[data-port="${port2}"]`
        );

        if (port1El) port1El.classList.add('connected');
        if (port2El) port2El.classList.add('connected');

        // Update interface state
        if (device1.interfaces[port1]) {
            device1.interfaces[port1].connected = true;
            device1.interfaces[port1].connectedTo = { device: device2.id, port: port2 };
        }
        if (device2.interfaces[port2]) {
            device2.interfaces[port2].connected = true;
            device2.interfaces[port2].connectedTo = { device: device1.id, port: port1 };
        }

        updateStats();

        const if1 = device1.interfaces[port1]?.name || `Port ${port1}`;
        const if2 = device2.interfaces[port2]?.name || `Port ${port2}`;

        showToast(`Connected: ${device1.name}:${if1} ↔ ${device2.name}:${if2}`, 'success');
        addTerminalLine(`%LINK-5-CHANGED: Interface ${if1}, changed state to up`, 'success');
        addTerminalLine(`%LINEPROTO-5-UPDOWN: Line protocol on ${if1}, changed state to up`, 'success');
    }

    /**
     * Draw a connection line on the SVG canvas
     */
    function drawConnection(connection) {
        const svg = elements.networkCanvas;
        if (!svg) return;

        const device1 = state.devices.find(d => d.id === connection.device1);
        const device2 = state.devices.find(d => d.id === connection.device2);

        if (!device1 || !device2) return;

        // Calculate positions
        const x1 = device1.x + 45;
        const y1 = device1.y + 90;
        const x2 = device2.x + 45;
        const y2 = device2.y + 90;

        // Calculate curve control point
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const perpX = dist > 0 ? -dy / dist : 0;
        const perpY = dist > 0 ? dx / dist : 0;
        const curveAmount = Math.min(dist * 0.08, 15);
        const cx = midX + perpX * curveAmount;
        const cy = midY + perpY * curveAmount;

        // Create SVG path
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('id', `connection-${connection.id}`);
        path.setAttribute('d', `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`);
        path.setAttribute('class', `cable-path cable-${connection.type}`);
        path.dataset.connectionId = connection.id;

        path.style.pointerEvents = 'stroke';
        path.style.cursor = 'pointer';

        path.addEventListener('click', (e) => {
            e.stopPropagation();
            selectConnection(connection);
        });

        path.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            if (confirm('Delete this connection?')) {
                deleteConnection(connection);
            }
        });

        svg.appendChild(path);
    }

    /**
     * Update all connection line positions
     */
    function updateConnections() {
        state.connections.forEach(conn => {
            const path = document.getElementById(`connection-${conn.id}`);
            if (!path) return;

            const device1 = state.devices.find(d => d.id === conn.device1);
            const device2 = state.devices.find(d => d.id === conn.device2);

            if (device1 && device2) {
                const x1 = device1.x + 45;
                const y1 = device1.y + 90;
                const x2 = device2.x + 45;
                const y2 = device2.y + 90;

                const midX = (x1 + x2) / 2;
                const midY = (y1 + y2) / 2;
                const dx = x2 - x1;
                const dy = y2 - y1;
                const dist = Math.sqrt(dx * dx + dy * dy);

                const perpX = dist > 0 ? -dy / dist : 0;
                const perpY = dist > 0 ? dx / dist : 0;
                const curveAmount = Math.min(dist * 0.08, 15);
                const cx = midX + perpX * curveAmount;
                const cy = midY + perpY * curveAmount;

                path.setAttribute('d', `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`);
            }
        });
    }

    /**
     * Select a connection
     */
    function selectConnection(connection) {
        state.selectedConnection = connection;

        // Reset all connection styles
        document.querySelectorAll('.cable-path').forEach(p => {
            p.style.strokeWidth = '';
            p.style.filter = '';
        });

        // Highlight selected
        const path = document.getElementById(`connection-${connection.id}`);
        if (path) {
            path.style.strokeWidth = '4';
            path.style.filter = 'drop-shadow(0 0 6px currentColor)';
        }

        const device1 = state.devices.find(d => d.id === connection.device1);
        const device2 = state.devices.find(d => d.id === connection.device2);

        if (device1 && device2) {
            showToast(`${device1.name} ↔ ${device2.name} (${connection.type})`, 'info');
        }
    }

    /**
     * Delete a connection
     */
    function deleteConnection(connection, showNotification = true) {
        const device1 = state.devices.find(d => d.id === connection.device1);
        const device2 = state.devices.find(d => d.id === connection.device2);

        // Update interface state
        if (device1?.interfaces[connection.port1]) {
            device1.interfaces[connection.port1].connected = false;
            device1.interfaces[connection.port1].connectedTo = null;
        }
        if (device2?.interfaces[connection.port2]) {
            device2.interfaces[connection.port2].connected = false;
            device2.interfaces[connection.port2].connectedTo = null;
        }

        // Update port indicators
        const port1El = document.querySelector(
            `#device-${connection.device1} .port-indicator[data-port="${connection.port1}"]`
        );
        const port2El = document.querySelector(
            `#device-${connection.device2} .port-indicator[data-port="${connection.port2}"]`
        );

        if (port1El) port1El.classList.remove('connected');
        if (port2El) port2El.classList.remove('connected');

        // Remove from state
        state.connections = state.connections.filter(c => c.id !== connection.id);

        // Remove SVG element
        const path = document.getElementById(`connection-${connection.id}`);
        if (path) path.remove();

        updateStats();

        if (showNotification) {
            showToast('Connection removed', 'success');
            addTerminalLine('%LINK-5-CHANGED: Interface changed state to down', 'warning');
        }
    }

    // ============================================
    // ROUTING TABLE
    // ============================================

    /**
     * Update routing table display
     */
    function updateRoutingTableDisplay(device) {
        const tbody = elements.routingTableBody;
        if (!tbody) return;

        if (!device || !device.canRoute) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; color: var(--text-muted);">
                        Device does not support routing
                    </td>
                </tr>
            `;
            return;
        }

        if (device.routingTable.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; color: var(--text-muted);">
                        No routes configured
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = device.routingTable.map(route => `
            <tr>
                <td>
                    <span style="color: var(--accent-primary); font-weight: 600;">
                        ${route.protocol}
                    </span> ${route.network}
                </td>
                <td>${route.mask}</td>
                <td>${route.nextHop}</td>
                <td>${route.interface}</td>
                <td>[${route.ad || route.metric}/${route.metric}]</td>
            </tr>
        `).join('');
    }

    /**
     * Add a static route
     */
    function addRoute() {
        if (!state.selectedDevice || !state.selectedDevice.canRoute) {
            showToast('Select a router device first', 'error');
            return;
        }

        const network = elements.routeNetwork?.value;
        const mask = elements.routeMask?.value;
        const nextHop = elements.routeNextHop?.value;

        if (!network || !mask || !nextHop) {
            showToast('Please fill all required fields', 'error');
            return;
        }

        const route = {
            network: network,
            mask: mask,
            nextHop: nextHop,
            interface: elements.routeInterface?.value || 'Gi0/0',
            metric: parseInt(elements.routeMetric?.value) || 1,
            protocol: 'S',
            ad: 1
        };

        state.selectedDevice.routingTable.push(route);
        updateRoutingTableDisplay(state.selectedDevice);

        addTerminalLine(`ip route ${route.network} ${route.mask} ${route.nextHop}`, 'command');
        showToast('Static route added', 'success');

        // Clear inputs
        if (elements.routeNetwork) elements.routeNetwork.value = '';
        if (elements.routeNextHop) elements.routeNextHop.value = '';
    }

    // ============================================
    // PACKET SIMULATION
    // ============================================

    /**
     * Send a packet from source to destination
     */
    function sendPacket(source, destination, type = 'icmp') {
        const packet = {
            id: Date.now() + Math.random(),
            source: source,
            destination: destination,
            type: type,
            ttl: 64
        };

        state.packets.push(packet);
        animatePacket(packet);
        updateStats();
    }

    /**
     * Animate a packet moving across the canvas
     */
    function animatePacket(packet) {
        const source = state.devices.find(d => d.id === packet.source.id);
        const dest = state.devices.find(d => d.id === packet.destination.id);

        if (!source || !dest) return;

        const container = elements.canvasContainer;
        if (!container) return;

        const packetEl = document.createElement('div');
        packetEl.className = `packet ${packet.type}`;
        packetEl.id = `packet-${packet.id}`;
        container.appendChild(packetEl);

        const startX = source.x + 45;
        const startY = source.y + 50;
        const endX = dest.x + 45;
        const endY = dest.y + 50;

        let progress = 0;
        const speed = 0.02;

        function animate() {
            progress += speed;

            if (progress >= 1) {
                packetEl.remove();
                state.packets = state.packets.filter(p => p.id !== packet.id);
                updateStats();
                return;
            }

            // Ease in-out
            const easeProgress = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            const x = startX + (endX - startX) * easeProgress - 5;
            const y = startY + (endY - startY) * easeProgress - 5;

            packetEl.style.left = `${x}px`;
            packetEl.style.top = `${y}px`;

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }

    /**
     * Check if two devices are connected (directly or indirectly)
     */
    function areDevicesConnected(deviceId1, deviceId2, visited = new Set()) {
        if (deviceId1 === deviceId2) return true;
        if (visited.has(deviceId1)) return false;

        visited.add(deviceId1);

        const deviceConnections = state.connections.filter(c =>
            c.device1 === deviceId1 || c.device2 === deviceId1
        );

        for (const conn of deviceConnections) {
            const nextDevice = conn.device1 === deviceId1 ? conn.device2 : conn.device1;
            if (areDevicesConnected(nextDevice, deviceId2, visited)) {
                return true;
            }
        }

        return false;
    }

    // ============================================
    // PING TEST
    // ============================================

    /**
     * Open ping modal
     */
    function openPingModal(sourceDevice = null) {
        const modal = elements.pingModal;
        if (!modal) return;

        const sourceSelect = elements.pingSource;
        const destSelect = elements.pingDestination;

        if (sourceSelect && destSelect) {
            const options = state.devices
                .filter(d => d.ip && d.ip !== 'PUBLIC')
                .map(d => `<option value="${d.id}">${d.name} (${d.ip})</option>`)
                .join('');

            sourceSelect.innerHTML = options;
            destSelect.innerHTML = options;

            if (sourceDevice) {
                sourceSelect.value = sourceDevice.id;
            } else if (state.selectedDevice) {
                sourceSelect.value = state.selectedDevice.id;
            }
        }

        if (elements.pingOutput) {
            elements.pingOutput.innerHTML = '';
        }

        modal.classList.add('active');
    }

    /**
     * Start ping test
     */
    function startPing() {
        const sourceId = parseInt(elements.pingSource?.value);
        const destId = parseInt(elements.pingDestination?.value);
        const count = parseInt(elements.pingCount?.value || 4);
        const size = parseInt(elements.pingSize?.value || 32);

        const source = state.devices.find(d => d.id === sourceId);
        const dest = state.devices.find(d => d.id === destId);

        if (!source || !dest) {
            showToast('Invalid source or destination', 'error');
            return;
        }

        if (source.id === dest.id) {
            showToast('Source and destination cannot be the same', 'warning');
            return;
        }

        const output = elements.pingOutput;
        if (!output) return;

        output.innerHTML = `
            <div class="terminal-line info">
                Pinging ${dest.ip} from ${source.ip} with ${size} bytes of data:
            </div>
            <div class="terminal-line"></div>
        `;

        let sent = 0;
        let received = 0;
        const times = [];
        const connected = areDevicesConnected(source.id, dest.id);

        const pingInterval = setInterval(() => {
            sent++;
            sendPacket(source, dest, 'icmp');

            const success = connected && Math.random() > 0.05;
            const time = Math.floor(Math.random() * 50) + 1;

            if (success) {
                received++;
                times.push(time);
                output.innerHTML += `
                    <div class="terminal-line success">
                        Reply from ${dest.ip}: bytes=${size} time=${time}ms TTL=64
                    </div>
                `;
            } else if (!connected) {
                output.innerHTML += `
                    <div class="terminal-line error">Destination host unreachable.</div>
                `;
            } else {
                output.innerHTML += `
                    <div class="terminal-line error">Request timed out.</div>
                `;
            }

            output.scrollTop = output.scrollHeight;

            if (sent >= count) {
                clearInterval(pingInterval);

                const loss = ((sent - received) / sent * 100).toFixed(0);
                const avgTime = times.length 
                    ? (times.reduce((a, b) => a + b, 0) / times.length).toFixed(0) 
                    : 0;
                const minTime = times.length ? Math.min(...times) : 0;
                const maxTime = times.length ? Math.max(...times) : 0;

                output.innerHTML += `
                    <div class="terminal-line"></div>
                    <div class="terminal-line info">Ping statistics for ${dest.ip}:</div>
                    <div class="terminal-line output">
                        Packets: Sent = ${sent}, Received = ${received}, 
                        Lost = ${sent - received} (${loss}% loss)
                    </div>
                    ${times.length ? `
                        <div class="terminal-line output">Round trip times:</div>
                        <div class="terminal-line output">
                            Min = ${minTime}ms, Max = ${maxTime}ms, Avg = ${avgTime}ms
                        </div>
                    ` : ''}
                `;
            }
        }, 800);
    }

    // ============================================
    // TERMINAL / CLI
    // ============================================

    /**
     * Execute a CLI command
     */
    function executeCommand(command) {
        const cmd = command.toLowerCase().trim();

        if (cmd) {
            state.commandHistory.unshift(command);
            if (state.commandHistory.length > 50) state.commandHistory.pop();
            state.commandHistoryIndex = -1;
        }

        addTerminalLine(command, 'command');

        // Command routing
        const commands = {
            'help': cmdHelp,
            '?': cmdHelp,
            'show ip route': cmdShowIpRoute,
            'show interfaces': cmdShowInterfaces,
            'show ip interface brief': cmdShowIpIntBrief,
            'show ip int brief': cmdShowIpIntBrief,
            'show arp': cmdShowArp,
            'show vlan': cmdShowVlan,
            'show vlan brief': cmdShowVlan,
            'show running-config': cmdShowRunningConfig,
            'show run': cmdShowRunningConfig,
            'show mac address-table': cmdShowMacTable,
            'show mac-address-table': cmdShowMacTable,
            'show cdp neighbors': cmdShowCdpNeighbors,
            'show version': cmdShowVersion,
            'show inventory': cmdShowInventory,
            'show ip protocols': cmdShowIpProtocols,
            'show spanning-tree': cmdShowSpanningTree,
            'clear': cmdClear,
            'cls': cmdClear
        };

        if (commands[cmd]) {
            commands[cmd]();
        } else if (cmd.startsWith('ping ')) {
            cmdPing(cmd);
        } else if (cmd.startsWith('traceroute ') || cmd.startsWith('tracert ')) {
            cmdTraceroute(cmd);
        } else if (cmd.startsWith('configure ') || cmd === 'conf t' || cmd === 'config t') {
            addTerminalLine('Enter configuration commands. End with CNTL/Z.', 'info');
            addTerminalLine(`${state.selectedDevice?.name || 'Router'}(config)#`, 'info');
        } else if (cmd === 'exit' || cmd === 'end' || cmd === 'quit') {
            addTerminalLine(`${state.selectedDevice?.name || 'Router'}#`, 'info');
        } else if (cmd === 'enable' || cmd === 'en') {
            addTerminalLine(`${state.selectedDevice?.name || 'Router'}#`, 'info');
        } else if (cmd === 'disable') {
            addTerminalLine(`${state.selectedDevice?.name || 'Router'}>`, 'info');
        } else if (cmd !== '') {
            addTerminalLine(`% Unknown command: "${command}"`, 'error');
            addTerminalLine(`% Type 'help' or '?' for available commands`, 'output');
        }
    }

    // CLI Command Implementations
    function cmdHelp() {
        const helpText = [
            ['help, ?', 'Show help'],
            ['show ip route', 'Display routing table'],
            ['show interfaces', 'Display interfaces'],
            ['show ip int brief', 'Brief interface summary'],
            ['show arp', 'Display ARP table'],
            ['show vlan brief', 'Display VLANs'],
            ['show run', 'Display configuration'],
            ['show mac address-table', 'Display MAC table'],
            ['show cdp neighbors', 'Display CDP neighbors'],
            ['show version', 'Display version'],
            ['ping <ip>', 'Ping IP address'],
            ['traceroute <ip>', 'Trace route'],
            ['clear', 'Clear terminal']
        ];

        addTerminalLine('', 'output');
        addTerminalLine('Available commands:', 'info');
        addTerminalLine('─'.repeat(50), 'output');
        helpText.forEach(([cmd, desc]) => {
            addTerminalLine(`  ${cmd.padEnd(22)} ${desc}`, 'output');
        });
    }

    function cmdShowIpRoute() {
        if (!state.selectedDevice) {
            addTerminalLine('% No device selected', 'error');
            return;
        }

        if (!state.selectedDevice.canRoute) {
            addTerminalLine('% IP routing not enabled', 'error');
            return;
        }

        addTerminalLine('Codes: C - connected, S - static, R - RIP, O - OSPF', 'info');
        addTerminalLine('       * - candidate default', 'info');
        addTerminalLine('', 'output');

        state.selectedDevice.routingTable.forEach(route => {
            const prefix = route.mask === '255.255.255.0' ? '24' :
                          route.mask === '255.255.0.0' ? '16' :
                          route.mask === '0.0.0.0' ? '0' : '24';
            addTerminalLine(
                `${route.protocol.padEnd(4)} ${route.network}/${prefix} ` +
                `[${route.ad || 1}/${route.metric}] via ${route.nextHop}`, 
                'output'
            );
        });
    }

    function cmdShowInterfaces() {
        if (!state.selectedDevice) {
            addTerminalLine('% No device selected', 'error');
            return;
        }

        state.selectedDevice.interfaces.slice(0, 4).forEach(iface => {
            const statusType = iface.status === 'up' ? 'success' : 'error';
            addTerminalLine(
                `${iface.name} is ${iface.status}, line protocol is ${iface.status}`, 
                statusType
            );
            addTerminalLine(`  Hardware is GigabitEthernet, address is ${state.selectedDevice.mac}`, 'output');
            addTerminalLine(`  Internet address is ${iface.ip || 'not set'}`, 'output');
            addTerminalLine(`  MTU 1500 bytes, BW ${iface.speed}`, 'output');
            addTerminalLine('', 'output');
        });
    }

    function cmdShowIpIntBrief() {
        if (!state.selectedDevice) {
            addTerminalLine('% No device selected', 'error');
            return;
        }

        addTerminalLine('Interface           IP-Address      OK? Method Status     Protocol', 'info');

        state.selectedDevice.interfaces.forEach(iface => {
            const ip = (iface.ip || 'unassigned').padEnd(15);
            const status = iface.status === 'up' ? 'up' : 'down';
            addTerminalLine(
                `${iface.name.padEnd(19)} ${ip} YES manual ${status.padEnd(10)} ${status}`, 
                'output'
            );
        });
    }

    function cmdShowArp() {
        addTerminalLine('Protocol  Address          Age    Hardware Addr     Type   Interface', 'info');

        state.devices.filter(d => d.ip && d.ip !== 'PUBLIC').forEach(d => {
            const age = Math.floor(Math.random() * 120);
            addTerminalLine(
                `Internet  ${d.ip.padEnd(16)} ${String(age).padStart(3)}    ${d.mac}  ARPA   Gi0/0`, 
                'output'
            );
        });
    }

    function cmdShowVlan() {
        addTerminalLine('', 'output');
        addTerminalLine('VLAN Name                 Status    Ports', 'info');
        addTerminalLine('---- -------------------- --------- ------------------', 'info');

        state.vlans.forEach(v => {
            addTerminalLine(
                `${String(v.id).padEnd(4)} ${v.name.padEnd(20)} active    ${v.ports}`, 
                'output'
            );
        });
    }

    function cmdShowRunningConfig() {
        if (!state.selectedDevice) {
            addTerminalLine('% No device selected', 'error');
            return;
        }

        addTerminalLine('Building configuration...', 'info');
        addTerminalLine('', 'output');
        addTerminalLine('!', 'output');
        addTerminalLine(`hostname ${state.selectedDevice.name}`, 'output');
        addTerminalLine('!', 'output');

        state.selectedDevice.interfaces.slice(0, 4).forEach(iface => {
            addTerminalLine(`interface ${iface.name}`, 'output');
            if (iface.ip) {
                addTerminalLine(` ip address ${iface.ip} ${iface.subnet}`, 'output');
            }
            addTerminalLine(` ${iface.status === 'up' ? 'no shutdown' : 'shutdown'}`, 'output');
            addTerminalLine('!', 'output');
        });

        addTerminalLine('end', 'output');
    }

    function cmdShowMacTable() {
        addTerminalLine('Mac Address Table', 'info');
        addTerminalLine('-------------------------------------------', 'info');
        addTerminalLine('Vlan    Mac Address       Type        Ports', 'info');

        state.devices.filter(d => d.mac).slice(0, 10).forEach((d, i) => {
            addTerminalLine(
                `${String(d.vlan).padStart(4)}    ${d.mac}    DYNAMIC     Gi0/${i % 4}`, 
                'output'
            );
        });
    }

    function cmdShowCdpNeighbors() {
        addTerminalLine('Device ID        Local Intrfce  Holdtme  Capability  Platform  Port ID', 'info');

        if (!state.selectedDevice) return;

        const neighbors = state.connections.filter(c =>
            c.device1 === state.selectedDevice.id || c.device2 === state.selectedDevice.id
        );

        neighbors.forEach(conn => {
            const neighborId = conn.device1 === state.selectedDevice.id ? conn.device2 : conn.device1;
            const neighbor = state.devices.find(d => d.id === neighborId);

            if (neighbor) {
                const cap = neighbor.canRoute ? 'R S' : 'S';
                addTerminalLine(
                    `${neighbor.name.substring(0, 16).padEnd(16)} Gi0/0          180      ${cap.padEnd(11)} Linux     Gi0/0`, 
                    'output'
                );
            }
        });
    }

    function cmdShowVersion() {
        addTerminalLine('Cisco IOS Software, Version 15.1(4)M4', 'info');
        addTerminalLine('', 'output');
        addTerminalLine(`${state.selectedDevice?.name || 'Router'} uptime is ${Math.floor(Math.random() * 30)} days`, 'output');
        addTerminalLine('System image file is "flash:c2900-universalk9-mz.SPA.151-4.M4.bin"', 'output');
    }

    function cmdShowInventory() {
        addTerminalLine('NAME: "Chassis", DESCR: "Cisco Router"', 'info');
        addTerminalLine('PID: CISCO2911/K9, VID: V01, SN: FTX1234ABCD', 'output');
    }

    function cmdShowIpProtocols() {
        if (!state.selectedDevice?.canRoute) {
            addTerminalLine('% IP routing not enabled', 'error');
            return;
        }

        addTerminalLine('Routing Protocol is "static"', 'output');
        addTerminalLine('  Maximum path: 4', 'output');
    }

    function cmdShowSpanningTree() {
        state.vlans.slice(0, 2).forEach(v => {
            addTerminalLine(`VLAN00${String(v.id).padStart(2, '0')}`, 'info');
            addTerminalLine('  Spanning tree enabled protocol ieee', 'output');
            addTerminalLine(`  Root ID    Priority    ${32768 + v.id}`, 'output');
            addTerminalLine('  This bridge is the root', 'output');
            addTerminalLine('', 'output');
        });
    }

    function cmdPing(cmd) {
        const ip = cmd.split(' ')[1];
        if (!ip) {
            addTerminalLine('% Incomplete command', 'error');
            return;
        }

        if (!state.selectedDevice) {
            addTerminalLine('% No source device selected', 'error');
            return;
        }

        const dest = state.devices.find(d => d.ip === ip);
        addTerminalLine(`Sending 5 ICMP Echos to ${ip}:`, 'output');

        if (dest && areDevicesConnected(state.selectedDevice.id, dest.id)) {
            let results = '';
            for (let i = 0; i < 5; i++) {
                sendPacket(state.selectedDevice, dest, 'icmp');
                results += Math.random() > 0.1 ? '!' : '.';
            }
            addTerminalLine(results, 'success');
            const successCount = (results.match(/!/g) || []).length;
            addTerminalLine(`Success rate is ${successCount * 20}% (${successCount}/5)`, 'output');
        } else {
            addTerminalLine('.....', 'error');
            addTerminalLine('Success rate is 0% (0/5)', 'output');
        }
    }

    function cmdTraceroute(cmd) {
        const ip = cmd.split(' ')[1];
        if (!ip) {
            addTerminalLine('% Incomplete command', 'error');
            return;
        }

        addTerminalLine(`Tracing route to ${ip}:`, 'output');

        for (let i = 1; i <= 3; i++) {
            const time = Math.floor(Math.random() * 20) + 1;
            addTerminalLine(`  ${i}   10.0.${i}.1  ${time}ms  ${time + 2}ms`, 'output');
        }
    }

    function cmdClear() {
        if (elements.terminalOutput) {
            elements.terminalOutput.innerHTML = '';
        }
    }

    /**
     * Add a line to the terminal output
     */
    function addTerminalLine(text, type = 'output') {
        const terminal = elements.terminalOutput;
        if (!terminal) return;

        const line = document.createElement('div');
        line.className = `terminal-line ${type}`;
        line.textContent = text;
        terminal.appendChild(line);
        terminal.scrollTop = terminal.scrollHeight;
    }

    // ============================================
    // SUBNET CALCULATOR
    // ============================================

    /**
     * Calculate subnet information
     */
    function calculateSubnet() {
        const ip = elements.subnetIP?.value?.trim();
        let cidr = elements.subnetCIDR?.value?.trim();

        if (!ip) {
            showToast('Please enter an IP address', 'error');
            return;
        }

        // Parse CIDR
        let prefix;
        if (cidr.startsWith('/')) {
            prefix = parseInt(cidr.substring(1));
        } else if (cidr.includes('.')) {
            const parts = cidr.split('.').map(Number);
            prefix = parts.reduce((acc, val) => {
                return acc + (val.toString(2).match(/1/g) || []).length;
            }, 0);
        } else {
            prefix = parseInt(cidr) || 24;
        }

        if (isNaN(prefix) || prefix < 0 || prefix > 32) {
            showToast('Invalid CIDR prefix (0-32)', 'error');
            return;
        }

        // Parse IP
        const ipParts = ip.split('.').map(Number);
        if (ipParts.length !== 4 || ipParts.some(p => isNaN(p) || p < 0 || p > 255)) {
            showToast('Invalid IP address format', 'error');
            return;
        }

        // Calculate
        const ipNum = (ipParts[0] << 24) + (ipParts[1] << 16) + (ipParts[2] << 8) + ipParts[3];
        const mask = prefix === 0 ? 0 : (-1 << (32 - prefix)) >>> 0;
        const network = (ipNum & mask) >>> 0;
        const broadcast = (network | (~mask >>> 0)) >>> 0;
        const firstHost = network + 1;
        const lastHost = broadcast - 1;
        const totalHosts = prefix < 31 ? Math.pow(2, 32 - prefix) - 2 : (prefix === 31 ? 2 : 1);

        const numToIP = (num) => [
            (num >>> 24) & 255,
            (num >>> 16) & 255,
            (num >>> 8) & 255,
            num & 255
        ].join('.');

        const ipClass = ipParts[0] < 128 ? 'A' :
                       ipParts[0] < 192 ? 'B' :
                       ipParts[0] < 224 ? 'C' : 'D/E';

        const isPrivate = (ipParts[0] === 10) ||
                         (ipParts[0] === 172 && ipParts[1] >= 16 && ipParts[1] <= 31) ||
                         (ipParts[0] === 192 && ipParts[1] === 168);

        if (elements.subnetResults) {
            elements.subnetResults.style.display = 'grid';
            elements.subnetResults.innerHTML = `
                <div class="subnet-result-item">
                    <div class="subnet-result-label">Network</div>
                    <div class="subnet-result-value">${numToIP(network)}/${prefix}</div>
                </div>
                <div class="subnet-result-item">
                    <div class="subnet-result-label">Subnet Mask</div>
                    <div class="subnet-result-value">${numToIP(mask)}</div>
                </div>
                <div class="subnet-result-item">
                    <div class="subnet-result-label">Broadcast</div>
                    <div class="subnet-result-value">${numToIP(broadcast)}</div>
                </div>
                <div class="subnet-result-item">
                    <div class="subnet-result-label">First Host</div>
                    <div class="subnet-result-value">${prefix < 31 ? numToIP(firstHost) : 'N/A'}</div>
                </div>
                <div class="subnet-result-item">
                    <div class="subnet-result-label">Last Host</div>
                    <div class="subnet-result-value">${prefix < 31 ? numToIP(lastHost) : 'N/A'}</div>
                </div>
                <div class="subnet-result-item">
                    <div class="subnet-result-label">Total Hosts</div>
                    <div class="subnet-result-value">${totalHosts.toLocaleString()}</div>
                </div>
                <div class="subnet-result-item">
                    <div class="subnet-result-label">Wildcard</div>
                    <div class="subnet-result-value">${numToIP(~mask >>> 0)}</div>
                </div>
                <div class="subnet-result-item">
                    <div class="subnet-result-label">Class</div>
                    <div class="subnet-result-value">${ipClass} ${isPrivate ? '(Private)' : '(Public)'}</div>
                </div>
            `;
        }

        showToast('Subnet calculated', 'success');
    }

    // ============================================
    // MODALS
    // ============================================

    function openModal(id) {
        const modal = document.getElementById(id);
        if (modal) modal.classList.add('active');
    }

    function closeModal(id) {
        const modal = document.getElementById(id);
        if (modal) modal.classList.remove('active');
    }

    // ============================================
    // CATEGORY TOGGLE
    // ============================================

    function toggleCategory(header) {
        if (!header) return;
        header.classList.toggle('collapsed');
        const grid = header.nextElementSibling;
        if (grid) grid.classList.toggle('collapsed');
    }

    // ============================================
    // DEVICE CONSOLE
    // ============================================

    function openDeviceConsole(device) {
        state.selectedDevice = device;

        // Switch to CLI tab
        document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.panel-section').forEach(s => s.classList.remove('active'));

        const cliTab = document.querySelector('.panel-tab[data-tab="cli"]');
        const cliPanel = document.getElementById('cliPanel');

        if (cliTab) cliTab.classList.add('active');
        if (cliPanel) cliPanel.classList.add('active');

        addTerminalLine('', 'output');
        addTerminalLine(`Connected to ${device.name}`, 'info');
        addTerminalLine(`${device.name}>`, 'output');
    }

    // ============================================
    // SAVE / LOAD TOPOLOGY
    // ============================================

    function saveTopology() {
        const topology = {
            devices: state.devices,
            connections: state.connections,
            vlans: state.vlans,
            aclRules: state.aclRules,
            version: '3.0',
            savedAt: new Date().toISOString(),
            name: 'Connixis Topology'
        };

        const blob = new Blob([JSON.stringify(topology, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `connixis-topology-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);

        showToast('Topology saved', 'success');
    }

    function loadTopology() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';

        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const topology = JSON.parse(event.target.result);

                    // Clear existing
                    clearCanvas(false);

                    // Load devices
                    topology.devices.forEach(d => {
                        state.devices.push(d);
                        const el = createDeviceElement(d);
                        if (el && elements.canvasContainer) {
                            elements.canvasContainer.appendChild(el);
                        }
                    });

                    // Load connections
                    topology.connections.forEach(c => {
                        state.connections.push(c);
                        drawConnection(c);

                        // Update port indicators
                        const port1El = document.querySelector(
                            `#device-${c.device1} .port-indicator[data-port="${c.port1}"]`
                        );
                        const port2El = document.querySelector(
                            `#device-${c.device2} .port-indicator[data-port="${c.port2}"]`
                        );
                        if (port1El) port1El.classList.add('connected');
                        if (port2El) port2El.classList.add('connected');
                    });

                    // Load other data
                    if (topology.vlans) state.vlans = topology.vlans;
                    if (topology.aclRules) state.aclRules = topology.aclRules;

                    // Update counters
                    state.deviceIdCounter = Math.max(...state.devices.map(d => d.id), 0) + 1;
                    state.connectionIdCounter = Math.max(...state.connections.map(c => c.id), 0) + 1;

                    updateStats();
                    showToast('Topology loaded', 'success');

                } catch (err) {
                    showToast('Failed to load: ' + err.message, 'error');
                }
            };
            reader.readAsText(file);
        };

        input.click();
    }

    function clearCanvas(confirm_clear = true) {
        if (confirm_clear && !confirm('Clear all devices and connections?')) {
            return;
        }

        // Clear state
        state.devices = [];
        state.connections = [];
        state.selectedDevice = null;
        state.deviceIdCounter = 0;
        state.connectionIdCounter = 0;

        // Clear DOM
        if (elements.canvasContainer) {
            elements.canvasContainer.querySelectorAll('.network-device').forEach(el => el.remove());
        }
        if (elements.networkCanvas) {
            elements.networkCanvas.innerHTML = '';
        }

        // Reset UI
        if (elements.deviceConfigGroup) elements.deviceConfigGroup.style.display = 'none';
        if (elements.interfaceConfig) elements.interfaceConfig.style.display = 'none';
        if (elements.emptyState) elements.emptyState.style.display = 'block';

        updateStats();

        if (confirm_clear) {
            showToast('Canvas cleared', 'success');
        }
    }

    // ============================================
    // APPLY CONFIG
    // ============================================

    function applyDeviceConfig() {
        if (!state.selectedDevice) return;

        if (elements.deviceName) state.selectedDevice.name = elements.deviceName.value;
        if (elements.deviceIP) {
            state.selectedDevice.ip = elements.deviceIP.value;
            if (state.selectedDevice.interfaces[0]) {
                state.selectedDevice.interfaces[0].ip = elements.deviceIP.value;
            }
        }
        if (elements.deviceSubnet) state.selectedDevice.subnet = elements.deviceSubnet.value;
        if (elements.deviceGateway) state.selectedDevice.gateway = elements.deviceGateway.value;
        if (elements.deviceDNS) state.selectedDevice.dns = elements.deviceDNS.value;
        if (elements.deviceVLAN) state.selectedDevice.vlan = parseInt(elements.deviceVLAN.value);

        updateDeviceElement(state.selectedDevice);
        showToast(`Configuration applied to ${state.selectedDevice.name}`, 'success');
        addTerminalLine('%SYS-5-CONFIG_I: Configured from console', 'info');
    }

    // ============================================
    // CONTEXT MENU ACTIONS
    // ============================================

    function handleContextMenuAction(action) {
        const menu = elements.contextMenu;
        const deviceId = parseInt(menu?.dataset.deviceId);
        const device = state.devices.find(d => d.id === deviceId);

        hideContextMenu();

        if (!device) return;

        switch (action) {
            case 'configure':
                handleDeviceClick({ stopPropagation: () => {} }, device);
                break;
            case 'console':
                openDeviceConsole(device);
                break;
            case 'ping':
                openPingModal(device);
                break;
            case 'traceroute':
                if (state.selectedDevice) {
                    executeCommand(`traceroute ${device.ip}`);
                }
                break;
            case 'enable':
                device.status = 'online';
                updateDeviceElement(device);
                showToast(`${device.name} enabled`, 'success');
                break;
            case 'disable':
                device.status = 'offline';
                updateDeviceElement(device);
                showToast(`${device.name} disabled`, 'warning');
                break;
            case 'duplicate':
                duplicateDevice(device);
                break;
            case 'delete':
                if (confirm(`Delete ${device.name}?`)) {
                    deleteDevice(device);
                }
                break;
        }
    }

    function hideContextMenu() {
        if (elements.contextMenu) {
            elements.contextMenu.classList.remove('active');
        }
    }

    // ============================================
    // EVENT LISTENERS SETUP
    // ============================================

    function setupEventListeners() {
        // Panel tabs
        document.querySelectorAll('.panel-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.panel-section').forEach(s => s.classList.remove('active'));
                tab.classList.add('active');

                const panelId = `${tab.dataset.tab}Panel`;
                const panel = document.getElementById(panelId);
                if (panel) panel.classList.add('active');
            });
        });

        // Terminal input
        if (elements.terminalInput) {
            elements.terminalInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    executeCommand(elements.terminalInput.value);
                    elements.terminalInput.value = '';
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (state.commandHistoryIndex < state.commandHistory.length - 1) {
                        state.commandHistoryIndex++;
                        elements.terminalInput.value = state.commandHistory[state.commandHistoryIndex];
                    }
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    if (state.commandHistoryIndex > 0) {
                        state.commandHistoryIndex--;
                        elements.terminalInput.value = state.commandHistory[state.commandHistoryIndex];
                    } else {
                        state.commandHistoryIndex = -1;
                        elements.terminalInput.value = '';
                    }
                } else if (e.key === 'Tab') {
                    e.preventDefault();
                    const commands = ['show', 'ping', 'traceroute', 'configure', 'help', 'clear', 'exit'];
                    const input = elements.terminalInput.value.toLowerCase();
                    const match = commands.find(c => c.startsWith(input));
                    if (match) elements.terminalInput.value = match;
                }
            });
        }

        // Toolbar buttons
        document.getElementById('selectTool')?.addEventListener('click', () => {
            state.connectionMode = false;
            state.connectionStart = null;
            document.querySelectorAll('.port-indicator.connecting').forEach(p => {
                p.classList.remove('connecting');
            });
            document.getElementById('connectTool')?.classList.remove('active');
            document.getElementById('selectTool')?.classList.add('active');
        });

        document.getElementById('connectTool')?.addEventListener('click', () => {
            state.connectionMode = true;
            document.getElementById('connectTool')?.classList.add('active');
            document.getElementById('selectTool')?.classList.remove('active');
            showToast('Click on a port to start connection', 'info');
        });

        document.getElementById('pingTool')?.addEventListener('click', () => openPingModal());
        document.getElementById('subnetCalc')?.addEventListener('click', () => openModal('subnetModal'));
        document.getElementById('clearAll')?.addEventListener('click', () => clearCanvas());
        document.getElementById('saveTopology')?.addEventListener('click', saveTopology);
        document.getElementById('loadTopology')?.addEventListener('click', loadTopology);

        // Zoom controls
        document.getElementById('zoomIn')?.addEventListener('click', () => {
            state.zoomLevel = Math.min(state.zoomLevel + 0.1, 2);
            applyZoom();
        });

        document.getElementById('zoomOut')?.addEventListener('click', () => {
            state.zoomLevel = Math.max(state.zoomLevel - 0.1, 0.5);
            applyZoom();
        });

        document.getElementById('fitView')?.addEventListener('click', () => {
            state.zoomLevel = 1;
            applyZoom();
        });

        // Run simulation button
        document.getElementById('runSimulation')?.addEventListener('click', () => {
            state.simulationRunning = !state.simulationRunning;
            const btn = document.getElementById('runSimulation');
            if (btn) {
                btn.innerHTML = state.simulationRunning
                    ? '<i class="ri-pause-fill"></i><span>Pause</span>'
                    : '<i class="ri-play-fill"></i><span>Run</span>';
            }
            showToast(state.simulationRunning ? 'Simulation running' : 'Simulation paused', 'info');
        });

        // Apply config
        document.getElementById('applyConfig')?.addEventListener('click', applyDeviceConfig);

        // Delete device
        document.getElementById('deleteDevice')?.addEventListener('click', () => {
            if (state.selectedDevice && confirm(`Delete ${state.selectedDevice.name}?`)) {
                deleteDevice(state.selectedDevice);
            }
        });

        // Add route
        document.getElementById('addRoute')?.addEventListener('click', addRoute);

        // Context menu items
        document.querySelectorAll('.context-menu-item').forEach(item => {
            item.addEventListener('click', () => {
                handleContextMenuAction(item.dataset.action);
            });
        });

        // Hide context menu on click
        document.addEventListener('click', hideContextMenu);

        // Canvas click to deselect
        elements.canvasContainer?.addEventListener('click', (e) => {
            if (e.target === elements.canvasContainer || 
                e.target.classList.contains('canvas-grid')) {
                
                if (state.selectedDevice) {
                    const el = document.getElementById(`device-${state.selectedDevice.id}`);
                    if (el) el.classList.remove('selected');
                    state.selectedDevice = null;

                    if (elements.deviceConfigGroup) elements.deviceConfigGroup.style.display = 'none';
                    if (elements.interfaceConfig) elements.interfaceConfig.style.display = 'none';
                    if (elements.emptyState) elements.emptyState.style.display = 'block';
                }

                // Deselect connections
                document.querySelectorAll('.cable-path').forEach(p => {
                    p.style.strokeWidth = '';
                    p.style.filter = '';
                });
                state.selectedConnection = null;
            }
        });

        // Drag and drop from sidebar
        document.querySelectorAll('.device-item').forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('deviceType', item.dataset.type);
                e.dataTransfer.effectAllowed = 'copy';
                item.style.opacity = '0.5';
            });

            item.addEventListener('dragend', () => {
                item.style.opacity = '1';
            });
        });

        if (elements.canvasContainer) {
            elements.canvasContainer.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'copy';
            });

            elements.canvasContainer.addEventListener('drop', (e) => {
                e.preventDefault();
                const type = e.dataTransfer.getData('deviceType');
                if (type) {
                    const rect = elements.canvasContainer.getBoundingClientRect();
                    const x = Math.max(0, e.clientX - rect.left - 45);
                    const y = Math.max(0, e.clientY - rect.top - 60);
                    addDevice(type, x, y);
                }
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Delete selected device
            if (e.key === 'Delete' && state.selectedDevice && 
                document.activeElement.tagName !== 'INPUT') {
                if (confirm(`Delete ${state.selectedDevice.name}?`)) {
                    deleteDevice(state.selectedDevice);
                }
            }

            // Escape to cancel
            if (e.key === 'Escape') {
                if (state.connectionMode) {
                    document.querySelectorAll('.port-indicator.connecting').forEach(p => {
                        p.classList.remove('connecting');
                    });
                    state.connectionMode = false;
                    state.connectionStart = null;
                    document.getElementById('connectTool')?.classList.remove('active');
                    document.getElementById('selectTool')?.classList.add('active');
                }
                hideContextMenu();
                closeModal('subnetModal');
                closeModal('pingModal');
            }

            // Ctrl+S to save
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                saveTopology();
            }

            // Ctrl+O to load
            if (e.ctrlKey && e.key === 'o') {
                e.preventDefault();
                loadTopology();
            }
        });

        // Mobile sidebar toggle
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');

        if (sidebarToggle && sidebar && sidebarOverlay) {
            sidebarToggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                sidebarOverlay.classList.toggle('active');
            });

            sidebarOverlay.addEventListener('click', () => {
                sidebar.classList.remove('open');
                sidebarOverlay.classList.remove('active');
            });
        }

        // Mobile panel toggle
        const panelToggle = document.getElementById('panelToggle');
        const rightPanel = document.getElementById('rightPanel');

        if (panelToggle && rightPanel) {
            panelToggle.addEventListener('click', () => {
                rightPanel.classList.toggle('open');
            });
        }

        // Close mobile panels on canvas click
        if (elements.canvasContainer) {
            elements.canvasContainer.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    sidebar?.classList.remove('open');
                    sidebarOverlay?.classList.remove('active');
                    rightPanel?.classList.remove('open');
                }
            });
        }

        // Update time every second
        setInterval(updateTime, 1000);
    }

    // ============================================
    // INITIALIZATION
    // ============================================

    function init() {
        // Cache DOM elements
        cacheElements();

        // Setup event listeners
        setupEventListeners();

        // Initial UI state
        updateStats();
        updateTime();

        // Welcome message
        addTerminalLine('╔════════════════════════════════════╗', 'info');
        addTerminalLine('║   Connixis CLI v3.0                ║', 'info');
        addTerminalLine('║   Network Engineering Simulator    ║', 'info');
        addTerminalLine('╚════════════════════════════════════╝', 'info');
        addTerminalLine('', 'output');
        addTerminalLine("Type 'help' for available commands", 'output');
        addTerminalLine('', 'output');

        console.log('Connixis Network Simulator initialized');
    }

    // ============================================
    // EXPOSE GLOBAL FUNCTIONS
    // ============================================

    window.executeCommand = executeCommand;
    window.toggleCategory = toggleCategory;
    window.closeModal = closeModal;
    window.openModal = openModal;
    window.calculateSubnet = calculateSubnet;
    window.startPing = startPing;

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();